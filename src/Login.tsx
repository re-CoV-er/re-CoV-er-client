import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components'

interface LoginProps extends RouteComponentProps {}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 4rem 30rem;
`;

export const Login:FC<LoginProps> = () => {
return (
  <Container>
    <TextField
      id="name"
      label="Name"
      margin="normal"
    />
    <br/>
    <TextField
      id="password"
      label="Password"
      margin="normal"
      type="password"
    />
    <br/>
    <Button variant="contained" color="primary">
      Login
    </Button>
  </Container>
)};