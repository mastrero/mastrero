import * as React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import Head from 'next/head';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>ArunKumar Nadikattu | Mastrero</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="vieport" />
    </Head>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
