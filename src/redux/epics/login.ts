import { map, mergeMap, catchError, delay } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { LogInAction } from '../action-creators/authentication';
import { ofType, Epic } from 'redux-observable';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../constants';
import { logIn } from '../../graphql/authentication';
import { EpicDependencies } from '../store';

export const loginEpic: Epic = (
  action: Observable<LogInAction>,
  _,
  { client }: EpicDependencies,
) => {
  return action.pipe(
    ofType(LOG_IN),
    mergeMap((currentAction: LogInAction) => {
      console.log('in login pipe');
      return from(
        client.query<{ logIn: { accessToken: string } }>({
          query: logIn,
          variables: {
            logInInput: {
              password: currentAction.payload.password,
              username: currentAction.payload.username,
            },
          },
        }),
      ).pipe(
        map((response) => {
          if (response?.errors?.[0].message === 'Unauthorized') {
            throw new Error();
          }
          return {
            type: LOG_IN_SUCCESS,
            payload: {
              accessToken: response.data?.logIn?.accessToken,
            },
          };
        }),
        delay(500),
      );
    }),
    catchError((_error) => {
      console.log('error');
      return Promise.resolve({
        type: LOG_IN_FAILURE,
      });
    }),
  );
};
