import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions';


interface OwnProps extends RouteComponentProps {}

interface StateProps {
  users: string[]
}

interface DispatchProps {
  login: (username: string, password: string) => void
}

type Props = StateProps & DispatchProps & OwnProps

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem 10rem;
`;

 const Login:FC<Props> = (props) => {
   const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     event.persist();
     setUsername(event.target.value)
   };
   const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     event.persist();
     setPassword(event.target.value)
   };

   const [username, setUsername] = useState<string>('');
   const [password, setPassword] = useState<string>('')

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
    <br/>
    <TextField
      id="password"
      label="Password"
      margin="normal"
      type="password"
      onChange={handlePasswordChange}

    />
    <br/>
    <Button variant="contained" color="primary" onClick={() => props.login(username, password)}>
      Login
    </Button>
  </Container>
)};

const mapStateToProps = (state: any) => { return state };
const mapDispatchToProps = (dispatch: any) => {
  return {
    login(username: string, password: string) { dispatch(loginUser(username, password)) }
  }
};

export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(Login)