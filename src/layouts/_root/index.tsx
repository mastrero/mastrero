import * as React from 'react';
import { Flex } from '@chakra-ui/react';
import Sidebar from './_sidenav';

const MainLayout = () => {
  return (
    <Flex>
      <Sidebar />
      <main style={{ overflow: 'auto', height: '100vh', width: '100%' }}>
        <section style={{ minHeight: '100vh' }}>1</section>
        <section style={{ minHeight: '100vh' }}>2</section>
      </main>
    </Flex>
  );
};

export default MainLayout;
