import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CashPrize from 'components/CashPrize';
import Layout from 'components/Layout';
import ParticipationPart from 'components/ParticipationPart';
import defaultTheme from './theme';

const StyledApp = styled.div`
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledCashPrize = styled(CashPrize)`
  font-size: 25px;
`;

const App = (): JSX.Element => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <StyledApp>
        <StyledCashPrize cashPrize={2090} />
        <ParticipationPart />
      </StyledApp>
    </Layout>
  </ThemeProvider>
);

export default App;
