import React, { FC } from 'react';
import { hot } from "react-hot-loader/root";
import { Router, Link } from '@reach/router';
import { Home } from './Home';
import { Login } from './Login';
import styled from 'styled-components'

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: lightgrey;
  background-color:lightsalmon;
  border: 2px solid black;
  cursor: pointer;
  `

const StyledLink = styled(Link)`
  text-decoration: none;
`
const App = () => {
  return (
    <>
    <StyledLink to="/">
    <Heading>Re COV eR</Heading>
    </StyledLink>
    <Router>
      <Login path="/login"/>
      <Home path="/"/>
    </Router>
    </>
  )
}

export default hot(App);
