import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { GridAreaType } from '@types';

const Name: React.FC<GridAreaType> = React.memo(
  ({ gridArea }): JSX.Element => (
    <Box gridArea={gridArea}>
      <Text as="p" fontSize="xl" className="font-mono" ml={['0px', null, null, '-20px']}>
        Hello 👋🏻, I'm
      </Text>
      <Text as="h1" className="font-OpenSans" fontSize={['8vw', '4xl', '44px']} w="fit-content" fontWeight="700">
        ArunKumar Nadikattu
      </Text>
    </Box>
  )
);

Name.displayName = 'About Name';

export default Name;
