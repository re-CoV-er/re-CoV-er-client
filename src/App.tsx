import React from 'react';
import { hot } from "react-hot-loader/root";
import { Router } from '@reach/router';
import { Landing } from './pages/landing';
import Login  from './pages/login';
import { Header } from './components/header';
import Profile from './pages/profile'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { usersReducer } from './redux/reducers';

export const initialState = {activeUsers: ['default active user']};

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Landing path="/"/>
        <Login path="/login"/>
        <Profile path="/profile" />
      </Router>
    </Provider>
  )
}

const store = createStore(usersReducer);

export default hot(App);
