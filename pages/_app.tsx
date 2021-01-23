import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { NextSeo } from 'next-seo';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Head>
      <title>ArunKumar Nadikattu | Mastrero</title>
      <link rel="icon" href="/favicon.png" />
      {/* TRACKERS */}
      {process.env.NODE_ENV === 'production' ? (
        <script
          async
          src="https://insights.mastrero.vercel.app/tracker.js"
          data-ackee-server="https://insights.mastrero.vercel.app"
          data-ackee-domain-id="25cb2c6b-4344-45af-b102-9465d26130d3"></script>
      ) : null}
      {/* FONTS */}
      <link rel="prerender" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;800&display=swap"
        rel="stylesheet"></link>
      {/* SEO */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="vieport" />
    </Head>
    <NextSeo
      title="ArunKumar Nadikattu ~ Mastrero"
      description="Hello! I am ArunKumar Nadikattu, a enthusiastic web developer, focused on the design and development of digital products."
      canonical="https://mastrero.me/"
      openGraph={{
        url: 'https://mastrero.me/',
        title: 'ArunKumar Nadikattu ~ Mastrero',
        description:
          'Hello! I am ArunKumar Nadikattu, a enthusiastic web developer, focused on the design and development of digital products.',
        images: [
          {
            url: 'https://mastrero.vercel.app/ak_stick.png',
          },
        ],
        site_name: 'Mastrero Portfolio',
      }}
      twitter={{
        handle: '@mastrero',
        site: '@mastrero',
        cardType: 'summary_large_image',
      }}
    />
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
