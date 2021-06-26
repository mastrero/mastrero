import * as React from 'react';
import { SocialLinks } from './_utils';
import { IconButton, Icon } from '@chakra-ui/react';

const SocialLinkComponent: React.FC<any> = React.memo(
  (): JSX.Element => (
    <>
      {SocialLinks.map(({ name, url, icon }: { name: string; url: string; icon: any }) => (
        <IconButton
          ml="5px"
          key={name}
          variant="ghost"
          as="a"
          target="blank"
          href={url}
          aria-label={name}
          icon={<Icon as={icon} />}
        />
      ))}
    </>
  )
);

SocialLinkComponent.displayName = 'Social_Links';

export default SocialLinkComponent;
