import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Header from '../components/header';
import { About } from '../components/sections';

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Box as="main" gridArea="2 / 1 / 3 / 2" overflowY="auto" sx={{ scrollBehavior: 'smooth' }}>
        <About />
        <section style={{ height: '600px' }}>AK1</section>
        <section style={{ height: '600px' }}>AK2</section>
      </Box>
    </React.Fragment>
  );
};

export default Home;
