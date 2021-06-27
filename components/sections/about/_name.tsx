import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { GridAreaType } from '@types';

const Name: React.FC<GridAreaType> = React.memo(
  ({ gridArea }): JSX.Element => (
    <Box gridArea={gridArea}>
      <Text as="p" fontSize="xl" className="font-mono">
        Hello 👋🏻, I'm
      </Text>
      <Text
        as="h1"
        className="font-OpenSans"
        fontSize={['8vw', '4xl']}
        w="fit-content"
        fontWeight="600"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          h: '3px',
          w: '102%',
          bg: 'var(--chakra-colors-brand-primary)',
          left: '-2%',
          bottom: '10px',
          transform: 'skewY(-2deg)',
          zIndex: -1,
        }}>
        ArunKumar Nadikattu
      </Text>
    </Box>
  )
);

Name.displayName = 'About Name';

export default Name;
