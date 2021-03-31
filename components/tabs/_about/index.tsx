import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Highlight from './_highlight';
import GetInTouch from './_getInTouch';

const About: React.FC = (): JSX.Element => {
  return (
    <Box w={['100%', '80%', '60%']} textAlign="left">
      <Text as="span" fontFamily="monospace" fontWeight="600" fontSize={['1.28rem', null, '1.6rem']}>
        Hello 👋, I'm
      </Text>
      <Text
        as="h1"
        fontSize={['1.82rem', '2.12rem', '2.6rem']}
        fontWeight="700"
        color="var(--focus-font)"
        letterSpacing="1px"
        className="Font__Raleway">
        ArunKumar Nadikattu.
      </Text>
      <Text
        fontSize={['1.18rem', '1.32rem']}
        mb="20px"
        fontWeight="600"
        textAlign={['left', null, 'justify']}
        as="h2">
        a passionate <Highlight>Full Stack Web Developer</Highlight>, who loves coding, designing and building tech
        products and tools.
      </Text>
      <Text fontSize={['1.18rem', '1.32rem']} mb="20px" fontWeight="600" textAlign={['left', null, 'justify']}>
        I am a electronics engineer by qualification and <Highlight>Self Taught Programmer</Highlight> by
        profession. Currently on Data Science learning path.
      </Text>
      <Text fontSize={['1.18rem', '1.32rem']} mb="20px" fontWeight="600" textAlign={['left', null, 'justify']}>
        At work, I play with <Highlight>Javascript, React and NodeJS</Highlight>. Along with enhancing my skills in
        Python, TypeScript and Django.
      </Text>
      <GetInTouch />
    </Box>
  );
};

export default About;
