import React, { FC } from 'react';
import { Box, Text, Flex, Button, Icon } from '@chakra-ui/react';
import { Myself } from '@images';
import { FiGithub } from 'react-icons/fi';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { SiLinkedin } from 'react-icons/si';

const Details: FC<{ isOpen: boolean }> = ({ isOpen }: any) => {
  const style = {
    opacity: isOpen ? 1 : 0,
    height: isOpen ? '200px' : '50px',
    transition: 'all 0.35s linear',
    transform: `translateX(${isOpen ? 0 : -200}px)`,
  };

  return (
    <Flex {...style} w="250px" flexDir="column" justifyContent="center" alignItems="center">
      <Box as="picture" display="contents">
        <source srcSet={Myself} type="image/png" />
        <Box
          as="img"
          src={Myself}
          borderRadius="10px"
          w={isOpen ? '120px' : '0px'}
          transition="all 0.3s linear"
          h="120px"
          alt="ArunKumar"
        />
      </Box>
      <Text as="h1" fontSize={isOpen ? '1.3rem' : '0rem'} transition="font-size 0.3s ease" fontWeight="700">
        ArunKumar Nadikattu
      </Text>
      <Box borderBottomWidth="1px" borderBottomStyle="solid" borderBottomColor="currentColor">
        <Button
          as="a"
          href="https://github.com/mastrero"
          target="_blank"
          rel="noopener noreferrer"
          variant="icon-link"
          title="GitHub">
          <Icon boxSize="1.25rem" as={FiGithub} />
        </Button>

        <Button
          as="a"
          href="https://www.linkedin.com/in/arun-kumar-n/"
          target="_blank"
          rel="noopener noreferrer"
          variant="icon-link"
          title="LinkedIn">
          <Icon boxSize="1.25rem" as={SiLinkedin} />
        </Button>

        <Button as="a" href="mailto:arunaiekhil@gmail.com" target="_blank" variant="icon-link" title="Email">
          <Icon boxSize="1.5rem" as={HiOutlineMailOpen} />
        </Button>
      </Box>
    </Flex>
  );
};

export default Details;
