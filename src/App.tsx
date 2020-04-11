import store from './redux';
import { hot } from 'react-hot-loader/root';
import { Provider as Redux } from 'react-redux';
import { Router } from '@reach/router';
import { ApolloProvider as Apollo } from '@apollo/react-hooks';
import React from 'react';
import { Landing } from './pages/landing';
import Signup from './pages/signup';
import Login from './pages/login';
import Profile from './pages/profile';
import client from './graphql/client';

import GlobalStylesProvider from "./fonts/fonts";

const App = () => {
  return (
    <Redux store={store}>
      <Apollo client={client}>
        <Router>
          <Landing path="/" />
          <Signup path="/signup" />
          <Login path="/login" />
          <Profile path="/profile" />
        </Router>
        <GlobalStylesProvider />
      </Apollo>
    </Redux>
  );
};

export default hot(App);
