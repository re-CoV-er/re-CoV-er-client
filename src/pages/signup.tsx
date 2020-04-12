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
  signUp: (username: string, email: string, password: string) => void;
}

type Props = StateProps & DispatchProps & OwnProps;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  margin: 2rem 0;
`;

const Signup: FC<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [validPassword, setValidPassword] = useState(true);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
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

  const handleSubmit = () => {
    if (password.length < 8) {
      setValidPassword(false);
    } else {
      props.signUp(username, email, password);
    }
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
        id="email"
        value={email}
        label="E-Mail"
        margin="normal"
        type="email"
        onChange={handleEmailChange}
      />
      <TextField
        id="password"
        error={!validPassword}
        label="Password"
        margin="normal"
        type="password"
        onChange={handlePasswordChange}
      />
      <br />

      <Button variant="text" onClick={handleSubmit}>
        {props.authentication.loading ? 'loading' : 'Sign up'}
      </Button>
      {!validPassword ? (
        <ErrorContainer>
          <ErrorMessage message="The password must contain minimum 8 characters." />
        </ErrorContainer>
      ) : props.authentication.displayError ? (
        <ErrorContainer>
          <ErrorMessage message="A user already exists with this username or email. Please try again" />
        </ErrorContainer>
      ) : null}
    </Container>
  );
};

const mapStateToProps = (state: StateProps): StateProps => state;
const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  signUp(username, email, password) {
    dispatch(authentication.signUp({ username, email, password }));
  },
});

export default connect<StateProps, DispatchProps, OwnProps, StateProps>(
  mapStateToProps,
  mapDispatchToProps,
)(Signup);
