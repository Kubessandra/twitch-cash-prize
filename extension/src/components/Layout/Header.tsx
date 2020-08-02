import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 30px;
  background-color: ${({ theme }): string => theme.colors.main};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }): string => theme.shadow};
`;

const Text = styled.h1`
  color: ${({ theme }): string => theme.text.secondary};
  display: flex;
`;

const Header = (): JSX.Element => {
  return (
    <Container>
      <Text>
        Cash Prize
      </Text>
    </Container>
  );
};

export default Header;