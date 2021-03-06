import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 75px;
  background-color: ${({ theme }): string => theme.colors.secondary};
  text-align: center;
  position: relative;
  width: 100%;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }): string => theme.shadow};
`;

const Text = styled.h4`
  color: ${({ theme }): string => theme.text.main};
`;

const Footer = (): JSX.Element => {
  return (
    <Container>
      <Text>By KUBESSANDRA</Text>
    </Container>
  );
};

export default Footer;