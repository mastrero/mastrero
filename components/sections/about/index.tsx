import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Description from './_description';
import Name from './_name';

const About: React.FC = (): JSX.Element => {
  return (
    <Box as="section" minH="100%" id="about">
      <Box
        w={['94%', '92%', '90%', '74%']}
        m="0 auto"
        pt="2rem"
        display="grid"
        gridTemplateColumns="480px 1fr"
        gridTemplateRows="100px 1fr">
        <Name gridArea="1 / 1 / 2 / 2" />
        <Box gridArea="1 / 2 / 3 / 3">1</Box>
        <Description gridArea="2 / 1 / 3 / 2" />
      </Box>
    </Box>
  );
};

About.displayName = 'About Section';

export default About;
