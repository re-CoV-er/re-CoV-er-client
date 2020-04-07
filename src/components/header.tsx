import styled from 'styled-components';
import React from 'react';
import { Link } from '@reach/router';

const StyledLink = styled(Link)`
  text-decoration: none;
  `
const Heading = styled.h1`
  display: flex;
  text-align: left;
  color: #274753;
  background-color: white;
  padding-left: 0.5em;
  padding-right: 0.5em;
  border: 2px solid black;
  cursor: pointer;
  display: inline;
  font-size: 3em;
  font-family: 'Viminalis';
  `
export const Header = () => {
    return (
      <span>
        <StyledLink to="/">
            <Heading>re-CoV-er </Heading>
        </StyledLink>
      </span>  
    )
}