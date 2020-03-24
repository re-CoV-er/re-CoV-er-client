import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from '@reach/router';
import styled from 'styled-components'


interface HomeProps extends RouteComponentProps {}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  `

export const Home:FC<HomeProps> = ( { location } ) => {
  return (
    <>
    <Container>
      <h2>Home Page</h2>
      <p>on path {location && location.href}</p>
      <Link to="/login">Go to Login</Link>
    </Container>
    </>

  )
}