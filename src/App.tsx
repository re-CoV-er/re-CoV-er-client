import { configureStore } from "./redux"
import { hot } from "react-hot-loader/root";
import { Provider as Redux } from 'react-redux';
import { Router } from '@reach/router';
import { ApolloProvider as Apollo } from "@apollo/react-hooks";
import React from 'react';

import { Header } from './components/header';
import { Buttons } from './components/buttons';

import { Landing } from './pages/landing';

import Signup from './pages/signup';
import Profile from './pages/profile'
import client from './graphql/client';

const store = configureStore();

const App = () => {
  return (
    <Redux store={store}>
      <Apollo client={client}>
        <Header />
        <Buttons />
        <Router>
          <Landing path="/" />
          <Signup path="/signup" />
          <Profile path="/profile" />
        </Router>
      </Apollo>
    </Redux>
  )
}

export default hot(App);
