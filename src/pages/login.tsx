import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authentication } from '../redux/action-creators';
import { Dispatch } from 'redux';
import { AuthorizationState } from '../redux/reducers/authentication';

type OwnProps = RouteComponentProps;

type StateProps = {
  authentication: AuthorizationState
};

interface DispatchProps {
  logIn: (username: string, password: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Login: FC<Props> = (props) => {

  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

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
        id="password"
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}

      />
      <br />

      <Button variant="contained" color="primary" onClick={() => {
        props.logIn(username, password)
      }}>
        {props.authentication.loading ? "loading" : "Login"}
      </Button>
    </Container>
  )
};

const mapStateToProps = (state: StateProps): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  logIn(username, password) {
    dispatch(authentication.logIn({ username, password }))
  }
})

export default connect<StateProps, DispatchProps, OwnProps, StateProps>(mapStateToProps, mapDispatchToProps)(Login)