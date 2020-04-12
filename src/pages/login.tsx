import React, { FC, useState, useEffect } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { authentication } from '../redux/action-creators';
import { Dispatch } from 'redux';
import { AuthenticationState } from '../redux/reducers/authentication';
import { ErrorMessage } from '../components/error-message';

type OwnProps = RouteComponentProps;

type StateProps = {
  authentication: AuthenticationState;
};

interface DispatchProps {
  logIn: (username: string, password: string) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: green;
`;

const ErrorContainer = styled.div`
  margin: 2rem 0;
`;

const Login: FC<Props> = (props) => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [validPassword, setValidPassword] = useState(true);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (!validPassword) {
      setValidPassword(true);
    }
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUsername(event.target.value);
  };

  useEffect(() => {
    props.authentication.loggedIn && navigate('/profile');
  });

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
        error={!validPassword}
        id="password"
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}
      />
      <br />

      <Button
        variant="text"
        color="primary"
        onClick={() => {
          if (password.length < 8) {
            setValidPassword(false);
          } else {
            props.logIn(username, password);
          }
        }}
      >
        {props.authentication.loading ? 'loading' : 'Login'}
      </Button>
      {!validPassword ? (
        <ErrorContainer>
          <ErrorMessage message="The password must contain minimum 8 characters." />
        </ErrorContainer>
      ) : props.authentication.displayError ? (
        <ErrorContainer>
          <ErrorMessage message="Unknown credentials. Please try again" />
        </ErrorContainer>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state: StateProps): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  logIn(username, password) {
    dispatch(authentication.logIn({ username, password }));
  },
});

export default connect<StateProps, DispatchProps, OwnProps, StateProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
