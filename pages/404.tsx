import * as React from 'react';
import Image from 'next/image';
import { Box, Text, Button, Flex, ChakraProvider } from '@chakra-ui/react';

const NotFoundPage: React.FC = (): JSX.Element => (
  <ChakraProvider>
    <Box w="100%" h="100vh" p={['10px 0 100px 0', null, '80px 0']} bg="white">
      <Flex
        w={['100%', '95%', '75%']}
        m="0 auto"
        flexDirection={['column', null, 'row']}
        justifyContent={['center', null, 'space-around']}
        alignItems={['flex-end', null, 'center']}>
        <Box pt="80px">
          <Text as="h2" fontWeight="700" fontSize="1.35rem" color="black">
            OOPS!! You reached edge of the Cliff
          </Text>
          <Text as="h3" fontWeight="400" fontSize="1.15rem" color="black">
            The page you are looking for does not exist.
          </Text>
          <Button
            bg="black"
            color="white"
            px="10px"
            h="30px"
            mt="35px"
            _hover={{
              opacity: 0.6,
            }}
            onClick={() => {
              window.location.pathname = process.env.PUBLIC_URL || '/';
            }}>
            Go to Home
          </Button>
        </Box>
        <Box w="300px" as={Image} src="/404.gif" alt="404" loading="eager" />
      </Flex>
    </Box>
  </ChakraProvider>
);
export default NotFoundPage;
