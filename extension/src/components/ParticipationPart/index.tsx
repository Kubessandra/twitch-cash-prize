import React from 'react';
import Button from 'components/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
`;

const Text = styled.h2`
  margin-top: 0;
  color: ${({ theme }): string => theme.text.secondary};
`;

const StyledButton = styled(Button)`
  font-size: 1.5em;
`;

const ParticipationPart = (): JSX.Element => {
  return (
    <Container>
      <Text>
        Remplis la cagnote !
      </Text>
      <StyledButton onClick={() => {}}>
        EN T'ABONNANT
      </StyledButton>
    </Container>
  );
};

export default ParticipationPart;
