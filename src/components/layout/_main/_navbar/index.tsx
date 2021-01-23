import * as React from 'react';
import { Flex, TabList, Tab, Button } from '@chakra-ui/react';
import { Navbar_Props } from '@types';

const Navbar = ({ tabs = [] }: Navbar_Props) => (
  <TabList
    as="nav"
    w={['100vw', null, '100%']}
    overflowY="hidden"
    overflowX="auto"
    pr="0px"
    position="sticky"
    top="0"
    zIndex="100"
    bg="white">
    <Flex w="100%" className="custom-scroll" justify="flex-start" alignItems="center" overflowY="auto" h="100%">
      {tabs.map(
        (tab: string, i: number): JSX.Element => (
          <Button key={tab + i} id={tab} as={Tab} variant="nav-tab" ml="10px">
            {tab}
          </Button>
        )
      )}
    </Flex>
  </TabList>
);

export default Navbar;
