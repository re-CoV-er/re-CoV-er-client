import styled from 'styled-components';
import React from 'react';
import { Link } from '@reach/router';

const Heading = styled.h1`
  display: flex;
  justify-content: center;
  color: lightgrey;
  background-color: seagreen;
  border: 2px solid black;
  cursor: pointer;
  font-family: 'Viminalis';
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Header = () => {
  return (
    <StyledLink to="/">
      <Heading>Re CoV eR</Heading>
    </StyledLink>
  );
};
