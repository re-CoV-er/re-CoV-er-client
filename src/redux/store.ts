import { createStore, applyMiddleware, Store } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import ApolloClient from 'apollo-client';
import client from '../graphql/client';
import throttle from 'lodash.throttle';

import { reducer, rootEpic } from './reducers';
import persist from '../utils/persist';

export interface EpicDependencies {
  client: ApolloClient<unknown>;
}

const epicMiddleware = createEpicMiddleware({
  dependencies: { client },
});

export function configureStore(): Store {
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(epicMiddleware),
  );

  const store = createStore(reducer, persist.loadState(), composedEnhancers);

  epicMiddleware.run(rootEpic);

  return store;
}

const store = configureStore();
store.subscribe(
  throttle(() => {
    console.log('change');
    persist.saveState({
      authentication: store.getState().authentication,
    });
  }, 1000),
);

export default store;
