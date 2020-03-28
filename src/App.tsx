import { createStore } from 'redux';
import { hot } from "react-hot-loader/root";
import { Provider } from 'react-redux';
import { Router } from '@reach/router';
import React from 'react';

import { Header } from './components/header';
import { Landing } from './pages/landing';
import { usersReducer } from './redux/reducers';
import Login from './pages/login';
import Profile from './pages/profile'

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Landing path="/" />
        <Login path="/login" />
        <Profile path="/profile" />
      </Router>
    </Provider>
  )
}

const store = createStore(usersReducer);

export default hot(App);
