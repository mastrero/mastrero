import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../_theme';
import { SEO } from '@utils';
import { RootLayout } from '@layouts';

const IndexPage = () => (
  <>
    <SEO />
    <ChakraProvider theme={theme}>
      <RootLayout />
    </ChakraProvider>
  </>
);

export default IndexPage;
