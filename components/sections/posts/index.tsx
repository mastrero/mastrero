import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import Post from './_post';

const Posts: React.FC<any> = (): JSX.Element => {
  return (
    <Box as="section" mt={['1rem', '3.5rem']}>
      <Box w={['94%', '92%', '90%', '74%']} m="0 auto">
        <Text as="h2" ml={['0px', null, null, '-40px']} fontSize="2.56rem" fontWeight="700" mb="1rem">
          Posts
        </Text>
        <Box px={['0%', null, '6%', '8%']}>They will be here soon...😋😉</Box>
      </Box>
    </Box>
  );
};

export default Posts;
