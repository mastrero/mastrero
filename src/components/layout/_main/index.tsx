import * as React from 'react';
import { Grid } from '@chakra-ui/react';
import About from './_about';
import Content from './_content';

import * as tabs from '../../tabs';

const MainLayout = (): JSX.Element => {
  return (
    <Grid
      templateColumns={['1fr', null, '300px 1fr']}
      templateRows={['auto 1fr', null, '1fr']}
      h="100vh"
      mx="auto">
      <About />
      <Content content={{ ...tabs }} />
    </Grid>
  );
};

export default MainLayout;
