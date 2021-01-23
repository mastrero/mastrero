import * as React from 'react';
import { TabPanels, Tabs, TabPanel } from '@chakra-ui/react';
import Navbar from '../_navbar';

interface IContent {
  [name: string]: JSX.Element | Element | React.FC | any;
}

const Content = ({ content }: IContent): JSX.Element => (
  <Tabs id="navigation" as="main" gridArea={['2 / 1 / 3 / 2', null, '1 / 2 / 2 / 3']} isLazy>
    <Navbar tabs={Object.keys(content).map(k => k)} />
    <TabPanels>
      {Object.values(content).map(
        (Tab: any, i: any): JSX.Element => (
          <TabPanel key={Tab.name + i} as="section" p={['0.5rem', null, '1rem']}>
            <Tab />
          </TabPanel>
        )
      )}
    </TabPanels>
  </Tabs>
);

export default Content;
