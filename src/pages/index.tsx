import * as React from 'react';
import { ChakraProvider, Grid } from '@chakra-ui/react';
import { theme } from '../theme';
import { SEO } from '@utils';

import { MainLayout } from '../components/layout';

const IndexPage = () => (
  <>
    <SEO />
    <ChakraProvider theme={theme}>
      <MainLayout />
    </ChakraProvider>
  </>
);

export default IndexPage;
