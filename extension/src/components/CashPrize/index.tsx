import React, { useEffect } from 'react';
import log from 'loglevel';
import styled from 'styled-components';
import CashPNG from 'assets/cashprize.png';

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.5em;
`;

const Box = styled.div`
  border: solid 1px;
  border-radius: 500px;
  border-color: ${({ theme }): string => theme.colors.secondary};
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: ${({ theme }): string => theme.shadow};
`;

const Icon = styled.img`
  width: 2em;
  margin-right: 3em;
`;

const Gain = styled.span`
  color: ${({ theme }): string => theme.text.secondary};
  margin-right: 1em;
`;

export interface CashPrizeProps {
  cashPrize: number;
  className?: string;
}

const CashPrize = (props: CashPrizeProps): JSX.Element => {
  const {
    cashPrize,
    className = '',
  } = props;
  useEffect(() => {
    log.debug('[Mount] CashPrize');
  }, []);

  return (
    <Container className={className}>
      <Box>
        <Icon src={CashPNG} alt="cashIcon" />
        <Gain>
          {cashPrize}
        </Gain>
      </Box>
    </Container>
  );
};

export default CashPrize;
