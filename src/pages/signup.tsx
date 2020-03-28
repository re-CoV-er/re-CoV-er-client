import React, { FC, useState } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { signupUser } from '../redux/actions';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

interface OwnProps extends RouteComponentProps { }

interface StateProps {
  users: string[]
}

interface DispatchProps {
  signup: (username: string, password: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const Signup: FC<Props> = (props) => {
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setUsername(event.target.value)
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setPassword(event.target.value)
  };

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signUpMutation = gql`
    mutation SignUp($signInInput: SignInInput!) {
      createUser(input: $signInInput) {
        accessToken
      }
    }
  `;
  const [signUp, { data, loading, error }] = useMutation<any, any>(signUpMutation);

  return (
    <Container>
      <TextField
        id="name"
        value={username}
        label="Name"
        margin="normal"
        type="text"
        onChange={handleNameChange}
      />
      <br />
      <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}

      />
      <br />
      <Button variant="contained" color="primary" onClick={() => {
        signUp({
          variables: {
            signInInput: {
              username,
              password,
              email: "a@gmail.com"
            }
          }
        }).then((data) => {
          console.log(data)
          navigate("/profile")
        })
      }}>
        Sign up
    </Button>
    </Container>
  )
};

const mapStateToProps = (state: any) => { return state };
const mapDispatchToProps = (dispatch: any) => {
  return {
    signup(username: string, password: string) { dispatch(signupUser(username, password)) }
  }
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Signup)