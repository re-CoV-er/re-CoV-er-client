import { SIGN_UP, LOG_IN } from "../constants";
import { ActionCreator } from "redux";

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export interface LogInCredentials {
  username: string;
  password: string;
}
export interface SignUpAction {
  type: typeof SIGN_UP;
  payload: SignUpCredentials;
}

export interface LogInAction {
  type: typeof LOG_IN;
  payload: LogInCredentials;
}

export const signUp: ActionCreator<SignUpAction> = (
  credentials: SignUpCredentials
) => ({
  type: SIGN_UP,
  payload: credentials,
});

export const logIn: ActionCreator<LogInAction> = (
  credentials: LogInCredentials
) => ({
  type: LOG_IN,
  payload: credentials,
});

