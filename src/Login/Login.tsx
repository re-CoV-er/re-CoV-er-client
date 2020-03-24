import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import './styles.css';

interface LoginProps extends RouteComponentProps {}

export const Login:FC<LoginProps> = () => (
  <>
    <div className="input-container">
      <label>Name</label>
      <input/>
    </div>
    <div className="input-container">
      <label>Password</label>
      <input/>
    </div>
    <button>Login</button>
  </>
);