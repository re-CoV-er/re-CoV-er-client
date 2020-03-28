import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from '@reach/router';

interface LandingProps extends RouteComponentProps { }


export const Landing: FC<LandingProps> = () => {
  return (
    <>
      <h2>Landing Page</h2>
      <Link to="/signup">Go to Signup</Link>
    </>
  )
}