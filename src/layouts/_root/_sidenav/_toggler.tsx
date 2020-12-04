import React from 'react';
import { Box, Button, Flex, Icon, useColorMode } from '@chakra-ui/react';
import { BiArrowToLeft } from 'react-icons/bi';
import { MastreroLight, MastreroDark } from '@images';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useHotkeys } from 'react-hotkeys-hook';

type TogglerProps = {
  toggleHandler: any;
  isOpen: boolean;
};

export default function Toggler({ toggleHandler, isOpen }: TogglerProps) {
  const { toggleColorMode, colorMode } = useColorMode();

  useHotkeys('t', () => toggleColorMode(), {}, [colorMode]);
  useHotkeys('s', () => toggleHandler(), {}, [isOpen]);

  const btnStyle = {
    px: 0,
    bg: 'transparent',
    _active: {
      bg: 'none',
    },
    _hover: {
      bg: 'none',
    },
    _focus: {
      boxShadow: '0 0 0 1px rgba(66, 153, 225, 0.6)',
    },
  };

  return (
    <Flex zIndex="10" justifyContent="space-between" alignItems="center" minH="45px" w="100%" position="relative">
      <Box
        transition="all 0.3s linear"
        as="img"
        src={colorMode === 'light' ? MastreroLight : MastreroDark}
        w={isOpen ? '140px' : '0px'}
        alt="Mastrero"
      />
      <Button {...btnStyle} title="Sidebar Toggler" onClick={toggleHandler}>
        <Icon
          as={BiArrowToLeft}
          boxSize="1.5rem"
          transition="transform 0.3s ease"
          transform={`rotateY(${isOpen ? 0 : 180}deg) rotateX(${isOpen ? 180 : 0}deg)`}
        />
      </Button>
      <Button variant="icon-link" onClick={toggleColorMode} title="Toggle Theme" position="absolute" right="0" top="45px">
        {colorMode === 'dark' ? <Icon as={FaSun} boxSize="1.15rem" /> : <Icon as={FaMoon} boxSize="1.15rem" />}
      </Button>
    </Flex>
  );
}
