import { AppProps } from 'next/app';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

import { GlobalStyles } from '../components/GlobalStyles';
import { Heads } from '../components/Heads';
import { Color } from '../models/Color';

const App: React.FC<AppProps> = (appProps: AppProps) => {
  const { Component, pageProps } = appProps;

  return (
    <>
      <Heads />
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
  position: absolute;
`;

export default App;
