import { map, mergeMap, catchError, delay } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { LogInAction } from "../action-creators/authentication";
import { ofType, Epic } from "redux-observable";
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from "../constants";
import client from "../../graphql/client";
import { logIn } from "../../graphql/authentication";

export const loginEpic: Epic = (action: Observable<LogInAction>) => {
  return action.pipe(
    ofType(LOG_IN),
    mergeMap((currentAction: LogInAction) => {
      return from(
        client.query<{ logIn: { accessToken: string } }>({
          query: logIn,
          variables: {
            logInInput: {
              password: currentAction.payload.password,
              username: currentAction.payload.username,
            },
          },
        })
      ).pipe(
        map(response => {
          return {
            type: LOG_IN_SUCCESS,
            payload: {
              accessToken: response.data?.logIn.accessToken,
              loading: false,
              loggedIn: true,
            },
          };
        }),
        delay(500)
      );
    }),
    catchError(_error => {
      return Promise.resolve({
        type: LOG_IN_FAILURE,
      });
    })
  );
};
