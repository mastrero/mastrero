import React, { memo } from 'react';
import { Text } from '@chakra-ui/react';

const Highlight = memo(({ children }: { children: String }) => (
  <Text as="span" color="var(--hightlight)" fontSize="1.28rem" fontWeight="800">
    {children}
  </Text>
));

export default Highlight;
