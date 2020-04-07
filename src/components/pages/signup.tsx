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
  signUp: (email: string, password: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Signup: FC<Props> = (props) => {
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value)
  };
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value)
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => { props.authentication.loggedIn && navigate("/profile") })

  return (
    <Container>
      <TextField
        id="name"
        value={email}
        label="E-Mail"
        margin="normal"
        type="text"
        onChange={handleEmailChange}
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
        props.signUp(email, password)
      }}>
        {props.authentication.loading ? "loading" : "Sign up"}
      </Button>
    </Container>
  )
};

const mapStateToProps = (state: StateProps): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signUp(email: string, password: string) {
    dispatch(authentication.signUp({ email, password }))
  }
})

export default connect<StateProps, DispatchProps, OwnProps, StateProps>(mapStateToProps, mapDispatchToProps)(Signup)