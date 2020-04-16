import { combineReducers } from 'redux';
import { signupEpic, loginEpic } from '../epics';
import { authentication as authenticationReducer } from '../reducers/authentication';

import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';

export const rootEpic = (action: any, store: any, dependencies: any) =>
  combineEpics(signupEpic, loginEpic)(action, store, dependencies).pipe(
    catchError((error, source) => {
      console.error(error);
      return source;
    }),
  );

export const reducer = combineReducers({
  authentication: authenticationReducer,
});
