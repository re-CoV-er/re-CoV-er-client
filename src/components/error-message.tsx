import React from 'react';
import styled from 'styled-components';
import { Text } from '../identities/typography';

const Container = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(233, 116, 81);
  border: 1px solid rgb(233, 116, 81);
  border-radius: 5px;
  width: 100%;
  padding: 0.75rem;
`;

type ErrorProps = {
  message: string;
};

export function ErrorMessage({ message }: ErrorProps) {
  return (
    <Container>
      <Text>{message}</Text>
    </Container>
  );
}
