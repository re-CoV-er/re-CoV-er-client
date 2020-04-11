import gql from 'graphql-tag';

export const signUp = gql`
  mutation SignUp($signInInput: SignInInput!) {
    createUser(input: $signInInput) {
      accessToken
    }
  }
`;

export const logIn = gql`
  query LogIn($logInInput: LogInInput!) {
    logIn(input: $logInInput) {
      accessToken
    }
  }
`;
