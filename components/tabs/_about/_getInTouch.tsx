import React, { memo } from 'react';
import { Text, Box, Icon, IconButton, Center } from '@chakra-ui/react';
import { IoLogoLinkedin } from 'react-icons/io';
import { HiMail } from 'react-icons/hi';
import { GrGithub } from 'react-icons/gr';
import { SiGooglehangoutsmeet } from 'react-icons/si';

const GetInTouch = memo(() => (
  <Center flexDir="column" borderTop="3px solid var(--border-color)">
    <Text my="5px" fontSize="1.46rem" fontWeight="700">
      Get in Touch
    </Text>
    <Box>
      <IconButton
        mx="5px"
        as="a"
        href="https://www.linkedin.com/in/arunkumar-nadikattu/"
        rel="noreferrer"
        target="_blank"
        title="LinkedIn - Let's connect"
        aria-label="LinkedIn"
        borderRadius="0"
        bg="none"
        icon={<Icon w="2rem" h="2rem" color="blue.700" as={IoLogoLinkedin} />}
      />
      <IconButton
        mx="5px"
        as="a"
        href="https://github.com/mastrero"
        rel="noreferrer"
        target="_blank"
        aria-label="GitHub"
        title="Github Profile"
        borderRadius="0"
        bg="none"
        icon={<Icon w="1.8rem" h="1.8rem" color="black.900" as={GrGithub} />}
      />
      <IconButton
        mx="5px"
        as="a"
        target="_blank"
        href="mailto:arunaiekhil@gmail.com"
        rel="noreferrer"
        title="Email Me"
        aria-label="Email"
        borderRadius="0"
        bg="none"
        icon={<Icon w="2rem" h="2rem" color="red.600" as={HiMail} />}
      />
      <IconButton
        mx="5px"
        as="a"
        target="_blank"
        href="https://calendly.com/arunkumar_nadikattu/lets-catch-up"
        rel="noreferrer"
        aria-label="Google Meet - Calendly"
        title="Google Meet - Calendly"
        borderRadius="0"
        bg="none"
        icon={<Icon w="2rem" h="2rem" color="green.600" as={SiGooglehangoutsmeet} />}
      />
    </Box>
  </Center>
));

export default GetInTouch;
