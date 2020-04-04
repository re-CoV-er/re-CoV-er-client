import { combineReducers } from "redux";
import { signupEpic } from "../epics/signup";
import { loginEpic } from "../epics/login"
import { authentication as authenticationReducer } from "../reducers/authentication";

import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(signupEpic, loginEpic);

export const reducer = combineReducers({
  authentication: authenticationReducer,
});
