import React, { useEffect } from 'react';
import log from 'loglevel';
import styled from 'styled-components';
import CashPNG from 'assets/cashprize.png';

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Box = styled.div`
  border: solid 1px;
  border-radius: 30px;
  padding: 0.5em;
  flex-grow: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Icon = styled.img`
  width: 2em;
  margin-right: 3em;
`;

const Gain = styled.span`
  margin-right: 1em;
`;

const Label = styled.h3`
`;

interface CashPrizeProps {
  cashPrize: number;
}

const CashPrize = (props: CashPrizeProps): JSX.Element => {
  const { cashPrize } = props;
  useEffect(() => {
    log.debug('[Mount] CashPrize');
  }, []);

  return (
    <Container>
      <Label>
        Cash Prize
      </Label>
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
