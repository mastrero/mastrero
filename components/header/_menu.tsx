import * as React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Flex, Box, Icon } from '@chakra-ui/react';
import { nav_links } from './_utils';
import SocialLinkComponent from './_socialLinks';

const Menu: React.FC<MenuProps> = React.memo(
  ({ isOpen, onClose }): JSX.Element => (
    <Drawer isOpen={isOpen} id="tempo" placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent bg="brand.bg">
        <DrawerBody p="6.5rem 5rem 0 0">
          <Flex as="nav" flexDir="column" alignItems="flex-end">
            {nav_links.map(({ name, url, emoji, icon }: { name: string; url: string; emoji: any; icon: any }) => (
              <Box
                as="a"
                my="15px"
                href={url}
                key={name}
                className="remove-tap-highlight"
                fontFamily="monospace"
                fontSize="1.3rem"
                _hover={{
                  bg: 'linear-gradient(0deg, rgba(255,0,53,1) 10%, rgba(0,0,0,0) 10%)',
                }}
                onClick={() => {
                  setTimeout(() => {
                    console.log('Hell');
                    onClose();
                  }, 300);
                }}>
                {name}
                <Box as="span" color="brand.primary" pl="5px">
                  {emoji}
                </Box>
              </Box>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
          <Box as="strong">@mastrero</Box>
          <Box flexGrow={1} />
          <SocialLinkComponent />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
);

Menu.displayName = 'Header_Menu';

type MenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default Menu;
