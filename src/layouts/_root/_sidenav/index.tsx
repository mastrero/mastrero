import React, { useEffect } from 'react';
import { Box, useColorMode, useMediaQuery, useDisclosure } from '@chakra-ui/react';
import NavLinks from './_navlinks';
import Toggler from './_toggler';
import Details from './_details';

const Sidebar = () => {
  const [isDesktop] = useMediaQuery('(min-width: 768px');
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  useEffect(() => {
    if (!isDesktop) onOpen();
    else onClose();
  }, [isDesktop]);

  return (
    <Box
      as="aside"
      w={!isOpen ? '250px' : '40px'}
      maxW="250px"
      bg="transparent"
      h="100vh"
      transition="all 0.3s linear"
      boxShadow={`0 0 5px 0 ${colorMode === 'dark' ? '#4c4c4c' : '#bababa'}`}
      position="relative">
      <Toggler toggleHandler={onToggle} isOpen={!isOpen} />
      <Details isOpen={!isOpen} />
      <NavLinks isOpen={!isOpen} />
    </Box>
  );
};

export default Sidebar;
