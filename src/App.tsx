import React, { FC } from 'react';
import { hot } from "react-hot-loader/root";
import { Router, Link } from '@reach/router';
import { Home } from './Home/Home';
import { Login } from './Login/Login';



const App = () => {
  return (
    <>
    <Link to="/">
    <h1>Re COV eR</h1>
    </Link>
    <Router>
      <Login path="/login"/>
      <Home path="/"/>
    </Router>
    </>
  )
}

export default hot(App);
