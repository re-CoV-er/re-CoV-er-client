import gql from "graphql-tag";

export const signUp = gql`
  mutation SignUp($signInInput: SignInInput!) {
    createUser(input: $signInInput) {
      accessToken
    }
  }
`;
