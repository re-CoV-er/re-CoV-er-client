import { map, mergeMap, catchError, delay } from "rxjs/operators";
import { Observable, from } from "rxjs";
import { SignUpAction } from "../action-creators/authentication";
import { ofType, Epic } from "redux-observable";
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from "../constants";
import { signUp } from "../../graphql/authentication";
import { EpicDependencies } from "../store";

export const signupEpic: Epic = (
  action: Observable<SignUpAction>,
  _state,
  { client }: EpicDependencies
) => {
  return action.pipe(
    ofType(SIGN_UP),
    mergeMap((currentAction: SignUpAction) => {
      return from(
        client.mutate<{ createUser: { accessToken: string } }>({
          mutation: signUp,
          variables: {
            signInInput: {
              email: currentAction.payload.email,
              password: currentAction.payload.password,
              username: currentAction.payload.username,
            },
          },
        })
      ).pipe(
        map((response) => {
          return {
            type: SIGN_UP_SUCCESS,
            payload: {
              accessToken: response.data?.createUser.accessToken,
              loading: false,
              loggedIn: true,
            },
          };
        }),
        delay(500)
      );
    }),
    catchError((_error) => {
      return Promise.resolve({
        type: SIGN_UP_FAILURE,
      });
    })
  );
};
