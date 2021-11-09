import { AppProps } from 'next/app';
import { Reset } from 'styled-reset';

import { GlobalStyles } from '../components/GlobalStyles';
import { Heads } from '../components/Heads';

const App: React.FC<AppProps> = (appProps: AppProps) => {
  const { Component, pageProps } = appProps;

  return (
    <>
      <Heads />
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
