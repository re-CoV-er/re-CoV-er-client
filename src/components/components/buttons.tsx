import styled from 'styled-components';
import React from 'react';
import { Link } from '@reach/router';

const StyledLink = styled(Link)`
  text-decoration: none;
  `
const Button = styled.button`
  color: white;
  background-color: white;
  margin: 1em;
  padding: 0.4em 2em;
  border: 2px solid black;
  border-radius: 3px;
  `
const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
  background-color: white;
  margin: 1em;
  padding: 0.5em 1em;
  border: 2px solid black;
  border-radius: 3px;
  font-size: 1em;
  `
const ButtonsRow = styled.span`
  float: right;
  margin-top: 20px
  `
export const Buttons = () => {
    return (
      <ButtonsRow>
        <LinkButton to="">The Idea</LinkButton>
        <LinkButton to="/signup">Go to Signup</LinkButton>
      </ButtonsRow>  
    )
}