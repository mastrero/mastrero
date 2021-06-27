import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Description from './_description';
import Name from './_name';
import Image from './_image';

const About: React.FC = (): JSX.Element => {
  return (
    <Box as="section" minH="100%" id="about">
      <Box
        w={['94%', '92%', '90%', '74%']}
        m="0 auto"
        mt={['1rem', '2rem']}
        display="grid"
        gridTemplateColumns={['1fr', '1fr', 'minmax(470px, 500px) 1fr']}
        gridTemplateRows={['100px auto 1fr', '100px auto 1fr', '100px 1fr']}
        justifyContent="center">
        <Name gridArea="1 / 1 / 2 / 2" />
        <Image gridArea={['2 / 1 / 3 / 2', '2 / 1 / 3 / 2', '1 / 2 / 3 / 3']} />
        <Description gridArea={['3 / 1 / 4 / 2', '3 / 1 / 4 / 2', '2 / 1 / 3 / 2']} />
      </Box>
    </Box>
  );
};

About.displayName = 'About Section';

export default About;
