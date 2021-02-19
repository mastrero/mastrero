import * as React from 'react';
import { Box } from '@chakra-ui/react';
import Content from './_content';

import { About as A, Posts, Work, Contact } from '../../tabs';

const MainLayout = (): JSX.Element => {
  const tab_content = {
    'About 👨': A,
    'Posts ✍': Posts,
    'Work 👨‍💻': Work,
    'Contact 🐱‍🏍': Contact,
  };
  return <Content content={{ ...tab_content }} />;
};

export default MainLayout;
