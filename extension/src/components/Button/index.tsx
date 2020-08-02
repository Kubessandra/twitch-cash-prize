import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  background-color: ${({ theme }): string => theme.colors.secondary};
  border-radius: 2em;
  border: 0;
  padding: 1em;
  font-size: 1em;
  font-family: inherit;
  cursor: pointer;
  box-shadow: ${({ theme }): string => theme.shadow};
  color: ${({ theme }): string => theme.text.main};
  :active {
    opacity: 0.8;
  }
`;

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const {
    className = '',
    onClick = (): void => {},
    children,
  } = props;
  return (
    <Container
      className={className}
      onClick={onClick}
    >
      {children}
    </Container>
  );
};

export default Button;
