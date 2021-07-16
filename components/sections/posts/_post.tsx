import * as React from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { Box, Text, Icon } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const Post: React.FC<any> = (): JSX.Element => {
  return (
    <Box as="article" mb="1rem">
      <Link
        href="/"
        _hover={{
          textDecoration: 'none',
          '> .Post__title, .Post__read': {
            color: 'brand.primary',
          },
          '> .Post__read': {
            fontWeight: '500',
          },
          '> .Post__read .Post__read_icon': {
            visibility: 'visible',
          },
        }}>
        <Text as="h3" fontWeight="600" fontSize="1.4rem" className="Post__title">
          Demystifying styled-components
        </Text>
        <Text as="p" fontSize="1.12rem" my="0rem" className="Post__description">
          Somehow, using an obscure half-string-half-function syntax, the tool was able to take some arbitrary CSS and
          assign it to a React component, bypassing the CSS selectors we've always used.
        </Text>
        <Text
          as="span"
          fontSize="0.82rem"
          fontStyle="italic"
          className="Post__date"
          _after={{
            content: "'|'",
            mx: '8px',
            fontWeight: '600',
            fontSize: '1rem',
          }}>
          July 15, 2020
        </Text>
        {/* <Box as="span" mx="8px">|</Box> */}
        <Text as="span" className="Post__read">
          Read More <Icon as={RiExternalLinkLine} className="Post__read_icon" visibility="hidden" />
        </Text>
      </Link>
    </Box>
  );
};

export default Post;
