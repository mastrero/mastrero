import * as React from 'react';
import { Text } from '@chakra-ui/react';

const Highlight: React.FC<{ children: String }> = React.memo(
  ({ children }): JSX.Element => (
    <Text as="span" color="var(--hightlight)" fontSize="1.28rem" fontWeight="800">
      {children}
    </Text>
  )
);

export default Highlight;
