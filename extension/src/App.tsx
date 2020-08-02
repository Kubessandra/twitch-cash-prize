import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  min-height: 300px;
  height: 200px;
  min-width: 100px;
`;

const App = (): JSX.Element => (
  <StyledApp>
    Hello from the extension
  </StyledApp>
);

export default App;
