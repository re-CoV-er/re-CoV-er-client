import React, { FC } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Link } from '@reach/router';
import styled from 'styled-components'


interface HomeProps extends RouteComponentProps {}

const Container = styled.div`
  display: flex;
  justify-content: center;
  `

export const Home:FC<HomeProps> = () => {
  return (
    <Container> 
      <Link to="/login">Go to Login</Link>
    </Container>

  )
}