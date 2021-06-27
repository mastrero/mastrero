import * as React from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { SocialLinks } from 'utils/content';
import { GridAreaType, SocialLinksProps } from '@types';

const Description: React.FC<GridAreaType> = React.memo(
  ({ gridArea }): JSX.Element => (
    <Box gridArea={gridArea} className="font-OpenSans" fontWeight="600">
      <Text as="p">
        I'm a passionate, ambitious{` `}
        <Text as="span" variant="hightlight">
          Full Stack Developer
        </Text>
        , who loves coding, designing and building tech products and tools. I'm a fan of JavaScript, Java and Python. 💖
      </Text>
      <br />
      <Text as="p">
        Currently, I'm working{` `}
        <Text as="span" variant="hightlight">
          @IBM 😍
        </Text>
        {` `}
        with an awesome team. Also apart from the work I side hustle on other presonal & freelance projects in free
        time. 😜
      </Text>
      <br />
      <Text as="p">
        If this sounds like someone you'd like to collaborate with then{` `}
        <Text as="span" variant="hightlight">
          drop me a message
        </Text>
        , I'm always open for a conversation..🥰
      </Text>
      <br />
      <Box>
        <Text as="p">Reach out to me 👇🏻</Text>
        {SocialLinks.map(
          ({ name, url }: SocialLinksProps): JSX.Element => (
            <Link variant="hashtag" href={url} target="blank" rel="noopener" key={name}>
              {`#${name.split(':')[0]} `}
            </Link>
          )
        )}
      </Box>
    </Box>
  )
);

Description.displayName = 'About Description';

export default Description;
