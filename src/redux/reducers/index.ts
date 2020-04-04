import { combineReducers } from "redux";
import { signupEpic } from "../epics/signup";
import { authentication as authenticationReducer } from "../reducers/authentication";

import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(signupEpic);

export const reducer = combineReducers({
  authentication: authenticationReducer,
});
