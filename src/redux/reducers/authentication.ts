import {
  SIGN_UP_PENDING,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from "../constants";
import { AnyAction } from "redux";

interface KnownUser {
  loading: false;
  loggedIn: true;
  userDetails: UserDetails;
  accessToken: string;
}

interface UnknownUser {
  loading: boolean;
  loggedIn: false;
}

interface UserDetails {
  displayName: string;
  email: string;
}

type AuthorizationState = KnownUser | UnknownUser;

const initialState: AuthorizationState = {
  loading: false,
  loggedIn: false,
};

export const authentication = (
  state: AuthorizationState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SIGN_UP_PENDING:
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
