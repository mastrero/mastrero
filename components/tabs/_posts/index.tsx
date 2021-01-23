import * as React from 'react';
import Link from 'next/link';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';

const Posts = (): JSX.Element => {
  return (
    <Flex
      flexDir="column"
      justify="center"
      // alignItems="center"
      maxW={['100%', '88%', '600px']}
      mx={['auto', null, 'unset']}>
      <Box fontSize="1.2rem">
        Started scribbling 📝...
        <br />
        They will be here soon 😏..
      </Box>
    </Flex>
  );
};

interface IPost {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
}

const Post = ({ title, slug = '/broken-link', subtitle = '', description }: IPost): JSX.Element => (
  <Box as="article" w="100%" className="Individual__Post">
    <Link href={slug} passHref>
      <Box as="a" cursor="pointer" p="0.5rem">
        <Box as="h3" fontWeight="700" fontSize="1.2rem" className="highlight">
          {title}
        </Box>
        {!!subtitle && (
          <Box as="h4" fontWeight="500" fontSize="1.1rem" color="grey">
            {subtitle}
          </Box>
        )}
        <Box as="p" my="10px">
          {description}
        </Box>
        <Box fontSize="1.12rem" fontWeight="600">
          Read More
          <Icon as={FiArrowRight} ml="3px" className="highlight" color="white" />
        </Box>
      </Box>
    </Link>
  </Box>
);

export default Posts;
