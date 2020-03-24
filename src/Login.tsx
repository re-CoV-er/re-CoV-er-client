import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';

interface LoginProps extends RouteComponentProps {}


export const Login:FC<LoginProps> = () => (
  <>
      <label>Name</label>
      <input/>
      <label>Password</label>
      <input/>
    <button>Login</button>
  </>
);