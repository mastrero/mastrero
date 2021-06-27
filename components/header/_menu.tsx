import * as React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Flex, Box, Icon } from '@chakra-ui/react';
import { nav_links } from '../../utils/content';
import SocialLinkComponent from './_socialLinks';
import { HeaderMenuProps, NavLinksProps } from '@types';

const Menu: React.FC<HeaderMenuProps> = React.memo(
  ({ isOpen, onClose }): JSX.Element => (
    <Drawer isOpen={isOpen} id="tempo" placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent bg="brand.bg">
        <DrawerBody p="6.5rem 5rem 0 0">
          <Flex as="nav" flexDir="column" alignItems="flex-end">
            {nav_links.map(
              ({ name, url, emoji }: NavLinksProps): JSX.Element => (
                <Box
                  as="a"
                  my="15px"
                  href={url}
                  key={name}
                  className="remove-tap-highlight"
                  fontFamily="monospace"
                  fontSize="1.3rem"
                  _hover={{
                    bg: 'linear-gradient(0deg, var(--chakra-colors-brand-primary) 10%, rgba(0,0,0,0) 10%)',
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
              )
            )}
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

Menu.displayName = 'Header Menu';

export default Menu;
