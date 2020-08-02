import React, { useEffect } from 'react';
import styled from 'styled-components';
import log from 'loglevel';

import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  min-height: 100vh;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  position: relative;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const {
    children,
  } = props;

  useEffect(() => {
    log.debug('[Mount], Layout');
  }, []);

  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
