import React, { FC } from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { Links } from '@contents';

const NavLinks: FC<{ isOpen: boolean }> = ({ isOpen }) => {
  const handleClicks = (to: any, isExternal: any) => {
    if (to[0] === '#') alert('internal');
    else window.open(to, isExternal ? '_blank' : '_self');
  };

  return (
    <Box as="nav" display="flex" flexDirection="column" transition="all 0.3s linear" pl={isOpen ? '1.8rem' : '0.6rem'}>
      {Links.map(({ name, to, isExternal, icon }: any, index: number) => (
        <Button
          key={`${name}${index}`}
          variant="nav-link"
          leftIcon={<Icon as={icon} boxSize="1.25rem" mr="0" />}
          onClick={() => handleClicks(to, isExternal)}>
          <Box
            as="span"
            transform={`rotateX(${isOpen ? 0 : 90}deg)`}
            fontSize={`${isOpen ? 1.1 : 0}rem`}
            transition="transform 0.3s linear"
            ml="0.5rem">
            {name}
          </Box>
        </Button>
      ))}
    </Box>
  );
};

export default NavLinks;
