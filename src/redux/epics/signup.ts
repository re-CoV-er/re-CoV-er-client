import { map, mergeMap, catchError, delay } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { SignUpAction } from '../action-creators/authentication';
import { ofType, Epic } from 'redux-observable';
import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../constants';
import { signUp } from '../../graphql/authentication';
import { EpicDependencies } from '../store';
import { ExecutionResult, GraphQLError } from 'graphql';

export const signupEpic: Epic = (
  action: Observable<SignUpAction>,
  _state,
  { client }: EpicDependencies,
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
        }),
      ).pipe(
        map(
          (
            response: ExecutionResult<{
              createUser?: { accessToken?: string };
            }>,
          ) => ({
            type: SIGN_UP_SUCCESS,
            payload: {
              accessToken: response.data?.createUser?.accessToken,
              loading: false,
              loggedIn: true,
            },
          }),
        ),
        delay(500),
        catchError((_error?: GraphQLError) => {
          return Promise.resolve({
            type: SIGN_UP_FAILURE,
            payload: {
              errorMessage: 'any error message', // FIXME add message from backend
            },
          });
        }),
      );
    }),
  );
};
