import { Box } from '@chakra-ui/react';
import { GridAreaType } from '@types';
import * as React from 'react';
import Image from 'next/image';
import AK_Image from 'public/arunkumar_n.jpg';

const _Image: React.FC<GridAreaType> = ({ gridArea }) => (
  <Box
    gridArea={gridArea}
    textAlign={['center', null, 'right']}
    sx={{
      '> div': {
        top: ['0', '0', '15%'],
      },
    }}>
    <Image src={AK_Image} alt="ArunKumar Nadikattu ~ Mastrero" placeholder="blur" width="350px" height="350px" />
  </Box>
);

_Image.displayName = 'About Image';

export default _Image;
