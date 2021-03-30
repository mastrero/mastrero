import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;

// <Head>

//   {/* TRACKERS */}
//   {process.env.NODE_ENV === 'production' ? (
//     <script
//       async
//       src="https://insights.mastrero.vercel.app/tracker.js"
//       data-ackee-server="https://insights.mastrero.vercel.app"
//       data-ackee-domain-id="25cb2c6b-4344-45af-b102-9465d26130d3"></script>
//   ) : null}
//   {/* FONTS */}
//   <link rel="prerender" href="https://fonts.gstatic.com" />
//   <link
//     href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
//     rel="stylesheet"></link>
//   <link
//     href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;800&display=swap"
//     rel="stylesheet"></link>
//   {/* SEO */}
// </Head>
