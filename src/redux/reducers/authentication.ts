import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../constants";
import { AnyAction } from "redux";

interface UserDetails {
  displayName: string;
  email: string;
}

export interface AuthorizationState {
  loading: boolean;
  loggedIn: boolean;
  userDetails?: UserDetails;
  accessToken?: string;
}

const initialState: AuthorizationState = {
  loading: false,
  loggedIn: false,
};

export const authentication = (
  state: AuthorizationState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...state, loading: true };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        accessToken: action.payload.accessToken,
        userDetails: action.payload.userDetails,
      };
    case SIGN_UP_FAILURE:
      return {
        loading: false,
        loggedIn: false,
      };
    default:
      return { ...state };
  }
};
