import * as React from 'react';
import { SocialLinks } from '../../utils/content';
import { IconButton, Icon } from '@chakra-ui/react';
import { SocialLinksProps } from '@types';

const SocialLinkComponent: React.FC = React.memo(
  (): JSX.Element => (
    <>
      {SocialLinks.map(
        ({ name, url, icon }: SocialLinksProps): JSX.Element => (
          <IconButton
            ml="5px"
            key={name}
            variant="ghost"
            as="a"
            target="blank"
            href={url}
            rel="noopener"
            aria-label={name}
            icon={<Icon as={icon} />}
          />
        )
      )}
    </>
  )
);

SocialLinkComponent.displayName = 'Social_Links';

export default SocialLinkComponent;
