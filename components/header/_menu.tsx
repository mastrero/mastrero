import * as React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Flex, Box } from '@chakra-ui/react';
import { nav_links } from './_utils';

const Menu: React.FC<MenuProps> = React.memo(
  ({ isOpen, onClose }): JSX.Element => (
    <Drawer isOpen={isOpen} id="tempo" placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent bg="brand.bg">
        <DrawerBody p="7rem 0 0 3.5rem">
          <Flex as="nav" flexDir="column">
            {nav_links.map(({ name, url }: { name: string; url: string }, index: number) => (
              <Box
                as="a"
                my="10px"
                href={url}
                key={index}
                className="remove-tap-highlight"
                fontFamily="monospace"
                fontSize="1.3rem"
                onClick={() => {
                  setTimeout(() => {
                    console.log('Hell');
                    onClose();
                  }, 300);
                }}
                _hover={{
                  color: 'brand.primary',
                }}>
                <Box as="span" color="brand.primary" pr="5px">{`0${index + 1}.`}</Box>
                {name}
              </Box>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
);

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default Menu;
