import * as React from 'react';
import Content from './_content';

import { About, Posts, Work, Contact } from '../../tabs';

const MainLayout: React.FC = (): JSX.Element => {
  const tab_content = {
    'About 👨': About,
    'Posts ✍': Posts,
    'Work 👨‍💻': Work,
    'Contact 🐱‍🏍': Contact,
  };
  return <Content content={{ ...tab_content }} />;
};

export default MainLayout;
