import * as React from 'react';
import { Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Flex, Box, IconButton, Icon } from '@chakra-ui/react';
import { nav_links } from './_utils';
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Menu: React.FC<MenuProps> = React.memo(
  ({ isOpen, onClose }): JSX.Element => (
    <Drawer isOpen={isOpen} id="tempo" placement="right" onClose={onClose} size="sm">
      <DrawerOverlay />
      <DrawerContent bg="brand.bg">
        <DrawerBody p="6.5rem 5rem 0 0">
          <Flex as="nav" flexDir="column" alignItems="flex-end">
            {nav_links.map(({ name, url, emoji }: { name: string; url: string, emoji: any }) => (
              <Box
              as="a"
              my="15px"
              href={url}
              key={name}
              className="remove-tap-highlight"
              fontFamily="monospace"
              fontSize="1.3rem"
              onClick={() => {
                setTimeout(() => {
                  console.log('Hell');
                  onClose();
                }, 300);
              }}>
                {name}
                <Box as="span" color="brand.primary" pl="5px">{emoji}</Box>
              </Box>
            ))}
          </Flex>
        </DrawerBody>
        <DrawerFooter>
            <Box as="strong">@mastrero</Box>
            <Box flexGrow={1} />
            <IconButton ml="5px" variant="ghost" as="a" target="blank" href="https://www.linkedin.com/in/arunkumar-nadikattu/" aria-label="LinkedIn: @ArunKumar Nadikattu" icon={<Icon as={FaLinkedinIn} />} />
            <IconButton ml="5px" variant="ghost" as="a" target="blank" href="https://github.com/mastrero" aria-label="GitHub: @mastrero" icon={<Icon as={FaGithub} />} />
            <IconButton ml="5px" variant="ghost" as="a" target="blank" href="https://twitter.com/iKnowToCode" aria-label="Twitter: @iKnowToCode" icon={<Icon as={FaTwitter} />} />
            <IconButton ml="5px" variant="ghost" as="a" target="blank" href="mailto:arunaiekhil@gmail.com" aria-label="Email: arunaiekhil@gmail.com" icon={<Icon as={AiOutlineMail} />} />
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
