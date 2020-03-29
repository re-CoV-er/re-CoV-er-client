import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducer } from "./reducers";
import { authenticationEpic } from "./epics/authentication";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(epicMiddleware)
  );

  const store = createStore(reducer, composedEnhancers);

  epicMiddleware.run(authenticationEpic);

  return store;
}
