import * as React from 'react';
import { Box, Flex, Icon, IconButton } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
// * ICON
import { IoLogoLinkedin } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import { GrGithub } from 'react-icons/gr';

const About = (): JSX.Element => {
  return (
    <Box
      as="header"
      pl={['5px', null, '20px']}
      pt={['5px', null, '10px']}
      gridArea="1 / 1 / 2 / 2"
      mx="auto"
      borderRightWidth={['none', null, '2px']}
      borderBottomWidth={['2px', null, '0px']}
      borderStyle="solid"
      borderColor="#e1e4e8">
      <Box as={motion.span} fontFamily="monospace" fontSize={['1.2rem', null, '1.4rem']}>
        Hello, I am
      </Box>
      <Box as={motion.h1} fontSize={['1.6rem', null, '2.28rem']} fontWeight="700">
        ArunKumar Nadikattu.
      </Box>
      <AnimatePresence>
        <Box
          as={motion.h2}
          animate={{ opacity: 1 }}
          initial={{ opacity: 1 }}
          color="black"
          fontSize={['1.2rem', null, '1.2rem']}
          mb={['0px', null, '5px']}>
          <SplitText text="I design and develop stuff" />
        </Box>
      </AnimatePresence>
      <Box as="p" fontSize={['1rem', null, '1.2rem']} fontFamily="monospace">
        I'm a Web Dev' based in India. Data Science and Cyber Security enthusiastic.
      </Box>
      <Flex ml={['-5px', null, '-20px']} mt={['0px', null, '15px']} justify="center">
        <IconButton
          as="a"
          href="https://www.linkedin.com/in/arunkumar-nadikattu/"
          target="_blank"
          title="LinkedIn"
          aria-label="LinkedIn"
          borderRadius="0"
          bg="none"
          icon={<Icon w="1.74rem" h="1.74rem" as={IoLogoLinkedin} />}
        />
        <IconButton
          as="a"
          href="https://github.com/mastrero"
          target="_blank"
          title="GitHub"
          aria-label="GitHub"
          borderRadius="0"
          bg="none"
          icon={<Icon w="1.5rem" h="1.5rem" as={GrGithub} />}
        />
        <IconButton
          as="a"
          target="_blank"
          href="mailto:arunaiekhil@gmail.com"
          title="Email"
          aria-label="Email"
          borderRadius="0"
          bg="none"
          icon={<Icon w="1.78rem" h="1.78rem" as={HiMail} />}
        />
      </Flex>
    </Box>
  );
};

export default About;

export const SplitText = ({ text }: any) => {
  const words = text.split(' ');
  return words.map((word: React.Key, i: number) => (
    <Box as="span" key={text + i} display="inline-block" overflow="hidden">
      <Box
        as={motion.span}
        initial={{ y: '100%' }}
        animate="visible"
        variants={{
          visible: (i: number) => ({
            y: 0,
            transition: {
              delay: i * 0.25,
            },
          }),
        }}
        display="inline-block"
        willChange="transform"
        custom={i}>
        {word + (i !== words.length - 1 ? '\u00A0' : '')}
      </Box>
    </Box>
  ));
};
