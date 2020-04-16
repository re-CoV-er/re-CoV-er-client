import React from 'react';
import styled from 'styled-components';

type TextProps = {
  children: any;
};

const Container = styled.div`
  font-family: 'Viminalis';
  font-size: 14px;
`;

export function Text({ children }: TextProps) {
  return <Container>{children}</Container>;
}
