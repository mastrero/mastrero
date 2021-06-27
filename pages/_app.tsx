import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../utils/theme';
import Fonts from 'utils/fonts';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }): JSX.Element => (
  <>
    <Head>
      <title>ArunKumar Nadikattu | Mastrero</title>
      <link rel="icon" href="/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="vieport" />
      <meta charSet="UTF-8"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    </Head>
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
