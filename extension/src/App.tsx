import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import CashPrize from 'components/CashPrize';
import Layout from 'components/Layout';
import defaultTheme from './theme';

const StyledApp = styled.div`
  min-height: 300px;
  height: 200px;
  min-width: 100px;
  margin: 2em;
`;

const App = (): JSX.Element => (
  <ThemeProvider theme={defaultTheme}>
    <Layout>
      <StyledApp>
        <CashPrize cashPrize={2090} />
      </StyledApp>
    </Layout>
  </ThemeProvider>
);

export default App;
