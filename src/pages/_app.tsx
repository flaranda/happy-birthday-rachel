import { AppProps } from 'next/app';
import styled from 'styled-components';
import { Reset } from 'styled-reset';
import Head from 'next/head';

import { GlobalStyles } from '../components/GlobalStyles';

const App: React.FC<AppProps> = (appProps: AppProps) => {
  const { Component, pageProps } = appProps;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <Reset />
      <GlobalStyles />
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </>
  );
};

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 414px;
  max-height: 736px;
  overflow: hidden;
  position: absolute;
`;

export default App;
