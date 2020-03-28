import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { hot } from "react-hot-loader/root";
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import React from 'react';

import { Header } from './components/header';
import { Landing } from './pages/landing';
import { usersReducer } from './redux/reducers';
import Signup from './pages/signup';
import Profile from './pages/profile'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Landing path="/" />
          <Signup path="/signup" />
        <Profile path="/profile" />
      </Router>
    </Provider>
  )
}

const store = createStore(usersReducer, composeWithDevTools());

export default hot(App);
