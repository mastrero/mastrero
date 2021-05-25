import * as React from 'react';
import { Box, Flex, IconButton, Icon, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import Nav from './_nav';
import Menu from './_menu';

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const [showShowModal] = useMediaQuery('(max-width: 767px)');

  React.useLayoutEffect(() => {
    if (!showShowModal) onClose();
    return () => {};
  }, [showShowModal]);

  return (
    <Box as="header" p={['20px 0 5px']} w="100%">
      <Flex justifyContent="space-between" alignItems="center" w={['94%', null, '88%']} h="50px" m="0 auto">
        <Box as="img" src="AK.svg" alt="ArunKumar Nadikattu" h="100%" w={['50px', null, '60px']} />
        <IconButton
          icon={<Icon as={isOpen ? CgClose : CgMenuRight} w="2em" h="2em" color="brand.primary" />}
          variant="self-outline"
          display={['flex', null, 'none']}
          className="plain-btn-hover"
          aria-label="Navigation Menu Button"
          onClick={onToggle}
          zIndex="1410"
        />
        <Nav />
      </Flex>
      <Menu isOpen={showShowModal && isOpen} onClose={onClose} />
    </Box>
  );
};

export default Header;
