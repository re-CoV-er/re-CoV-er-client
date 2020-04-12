import {
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOG_IN,
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
} from '../constants';
import { AnyAction } from 'redux';

interface UserDetails {
  displayName: string;
  email: string;
}

export interface AuthenticationState {
  loading: boolean;
  loggedIn: boolean;
  displayError: boolean;
  userDetails?: UserDetails;
  accessToken?: string;
}

const initialState: AuthenticationState = {
  loading: false,
  loggedIn: false,
  displayError: false,
};

export const authentication = (
  state: AuthenticationState = initialState,
  action: AnyAction,
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
        displayError: true,
      };
    case LOG_IN:
      console.log('in reducer');
      return { ...state, displayError: false, loading: true };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        displayError: false,
        accessToken: action.payload.accessToken,
        userDetails: action.payload.userDetails,
      };
    case LOG_IN_FAILURE:
      return {
        loading: false,
        loggedIn: false,
        displayError: true,
      };
    default:
      return { ...state };
  }
};
