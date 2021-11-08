import { AppProps } from 'next/app';
import { Reset } from 'styled-reset';

import { GlobalStyles } from '../components/GlobalStyles';

const App: React.FC<AppProps> = (appProps: AppProps) => {
  const { Component, pageProps } = appProps;

  return (
    <>
      <Reset />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default App;
