import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Router, Link } from '@reach/router';

interface HomeProps extends RouteComponentProps {
}

export const Home:FC<HomeProps> = ( { location } ) => {
  return (
    <>
    <div className="title-container">
      <h2>Home Page</h2>
      <p>on path {location && location.href}</p>
      <Link to="/login">Go to Login</Link>
    </div>
    </>

  )
}