import { Box } from '@chakra-ui/react';
import * as React from 'react';
import Posts from '~components/sections/posts';
import Header from '../components/header';
import { About } from '../components/sections';

const Home: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Box as="main" gridArea="2 / 1 / 3 / 2" overflowY="auto" sx={{ scrollBehavior: 'smooth' }}>
        <About />
        <Posts />
        <section style={{ height: '600px' }}></section>
      </Box>
    </React.Fragment>
  );
};

export default Home;
