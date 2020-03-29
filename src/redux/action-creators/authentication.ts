import { SIGN_UP } from "../constants";
import { ActionCreator } from "redux";

export interface SignUpCredentials {
  username: string;
  email: string;
  password: string;
}

export interface SignUpAction {
  type: "SIGN_UP";
  payload: SignUpCredentials;
}

// interface LogInCredentials {
//   username: string;
//   password: string;
// }

// interface LogInAction {
//   type: "LOG_IN";
//   payload: LogInCredentials;
// }

// interface LogOutAction {
//   type: "LOG_OUT";
// }

export const signUp: ActionCreator<SignUpAction> = (
  credentials: SignUpCredentials
) => ({
  type: SIGN_UP,
  payload: credentials,
});

// export const logIn: ActionCreator<LogInAction> = (
//   credentials: LogInCredentials
// ) => ({
//   type: LOG_IN,
//   payload: credentials,
// });

// export const logOut: ActionCreator<LogOutAction> = () => ({
//   type: LOG_OUT,
// });
