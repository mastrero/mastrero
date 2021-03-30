import React from 'react';
import { Flex, IconButton, Icon, Box, useColorMode, Text } from '@chakra-ui/react';
import { IoLogoLinkedin } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import { GrGithub } from 'react-icons/gr';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = (): JSX.Element => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box w={['100%', '80%', '40%']} mx="auto" as="header">
      <Flex justify="space-between" alignItems="center">
        <IconButton
          borderRadius="0"
          variant="ghost"
          aria-label="Theme Toggler"
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        />
        <Box as="img" src="AK.svg" w="50px" h="auto" ml={['8px', 0]} />
        <Box>
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/arunkumar-nadikattu/"
            rel="noreferrer"
            target="_blank"
            title="LinkedIn"
            aria-label="LinkedIn"
            borderRadius="0"
            bg="none"
            icon={<Icon w="1.74rem" h="1.74rem" as={IoLogoLinkedin} />}
          />
          <IconButton
            as="a"
            href="https://github.com/mastrero"
            rel="noreferrer"
            target="_blank"
            title="GitHub"
            aria-label="GitHub"
            borderRadius="0"
            bg="none"
            icon={<Icon w="1.5rem" h="1.5rem" as={GrGithub} />}
          />
          <IconButton
            as="a"
            target="_blank"
            href="mailto:arunaiekhil@gmail.com"
            rel="noreferrer"
            title="Email"
            aria-label="Email"
            borderRadius="0"
            bg="none"
            icon={<Icon w="1.78rem" h="1.78rem" as={HiMail} />}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
