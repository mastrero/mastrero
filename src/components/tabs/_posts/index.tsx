import * as React from 'react';
import { Link } from 'gatsby';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const Posts = () => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      alignItems="center"
      maxW={['100%', '88%', '600px']}
      mx={['auto', null, 'unset']}></Flex>
  );
};

const Post = () => (
  <Box as="article" w="100%" className="Individual__Post">
    <Box as={Link} cursor="pointer" p="0.5rem" to="#">
      <Box as="h3" fontWeight="700" fontSize="1.2rem" className="highlight">
        {/* TITLE */}
      </Box>
      <Box as="h4" fontWeight="500" fontSize="1.1rem" color="grey">
        {/* SUBTITLE */}
      </Box>
      <Box as="p" my="10px">
        {/* DESCRIPTION / PARAGRAPH */}
      </Box>
      <Box fontSize="1.12rem" fontWeight="600">
        Read More
        <Icon as={FiArrowRight} ml="3px" className="highlight" color="white" />
      </Box>
    </Box>
  </Box>
);

export default Posts;
