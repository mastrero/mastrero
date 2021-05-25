import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <>
    <Head>
      <title>ArunKumar Nadikattu | Mastrero</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="vieport" />
    </Head>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
