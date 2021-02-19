import * as React from 'react';
import { TabPanels, Tabs, TabPanel, SlideFade } from '@chakra-ui/react';
import Navbar from '../_navbar';
import Header from '../_header';
interface IContent {
  [name: string]: JSX.Element | Element | React.FC | any;
}

const Content = ({ content }: IContent): JSX.Element => {
  return (
    <Tabs isLazy align="center">
      <Header />
      <Navbar tabs={Object.keys(content).map(k => k)} />
      <TabPanels as="main">
        {Object.values(content).map(
          (Tab: any, i: any): JSX.Element => {
            return (
              <TabPanel key={Tab.name + i} as="section" p={['0.5rem', null, '1rem']}>
                <SlideFade in={true}>
                  <Tab />
                </SlideFade>
              </TabPanel>
            );
          }
        )}
      </TabPanels>
    </Tabs>
  );
};

export default Content;
