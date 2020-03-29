import { combineReducers } from "redux";
import { authentication as authenticationEpic } from "./authentication";
import { authentication as authenticationReducer } from "../reducers/authentication";

import { combineEpics } from "redux-observable";

export const rootEpic = combineEpics(authenticationEpic);

export const reducer = combineReducers({
  authentication: authenticationReducer,
});
