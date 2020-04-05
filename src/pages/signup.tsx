import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authentication } from '../redux/action-creators';
import { Dispatch } from 'redux';
import { AuthenticationState } from '../redux/reducers/authentication';

type OwnProps = RouteComponentProps;

type StateProps = {
  authentication: AuthenticationState
};

interface DispatchProps {
  signUp: (username: string, email: string, password: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Signup: FC<Props> = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value)
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value)
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUsername(event.target.value)
  };


  useEffect(() => { props.authentication.loggedIn && navigate("/profile") })

  return (
    <Container>
      <TextField
        id="username"
        value={username}
        label="Username"
        margin="normal"
        type="text"
        onChange={handleUsernameChange}
      />
      <TextField
        id="email"
        value={email}
        label="E-Mail"
        margin="normal"
        type="email"
        onChange={handleEmailChange}
      />
      <TextField
        id="password"
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}

      />
      <br />

      <Button variant="contained" color="primary" onClick={() => {
        props.signUp(username, email, password)
      }}>
        {props.authentication.loading ? "loading" : "Sign up"}
      </Button>
    </Container>
  )
};

const mapStateToProps = (state: StateProps): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signUp(username, email, password) {
    dispatch(authentication.signUp({ username, email, password }))
  }
})

export default connect<StateProps, DispatchProps, OwnProps, StateProps>(mapStateToProps, mapDispatchToProps)(Signup)