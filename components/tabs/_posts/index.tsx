import * as React from 'react';
import Link from 'next/link';
import { Box, Flex, Icon, Tag } from '@chakra-ui/react';
import { FiArrowRight } from 'react-icons/fi';
import { fetchGraphQL, GQL_FETCH_ALL_POSTS } from 'utils';
import { IPost } from 'types';

const colorSchemes = [
  'blue',
  'cyan',
  'green',
  'orange',
  'pink',
  'purple',
  'yellow',
  'linkedin',
  'facebook',
  'messenger',
  'whatsapp',
  'twitter',
  'telegram',
];

const Posts: React.FC = (): JSX.Element => {
  const fetchPostEntries = async () => {
    const entries = await fetchGraphQL(GQL_FETCH_ALL_POSTS);
    return entries?.data?.postsCollection?.items;
  };
  const [posts, setPosts] = React.useState<any>([]);

  React.useEffect(() => {
    async function getPosts() {
      const allPosts = await fetchPostEntries();
      setPosts(() => [...allPosts]);
    }
    getPosts();
  }, [setPosts]);

  return (
    <Flex flexDir="column" maxW={['100%', '88%', '60%']} mx={['auto', null, 'unset']}>
      {posts.map(({ bannerImage, description, slug, subtitle, tags, title, sys }: IPost, i: any) => {
        /* @ts-ignore */
        return (
          <Post
            key={`${sys?.id} ${i}`}
            title={title}
            slug={slug}
            subtitle={subtitle}
            description={description}
            bannerImage={bannerImage}
            tags={tags}
            sys={sys}
          />
        );
      })}
    </Flex>
  );
};

const Post: React.FC<IPost> = ({
  title,
  slug = '/broken-link',
  subtitle = '',
  description,
  sys,
  tags,
}): JSX.Element => (
  <Box
    w="100%"
    className="Individual__Post"
    textAlign="left"
    _notLast={{
      borderBottom: '1px solid var(--font)',
    }}
    p="0.5rem 0.5rem 1rem"
    id={`post_${sys.id}`}>
    <Box as="article" w="100%" ml="-0.5rem" pl="0.5rem" borderLeft="3px solid var(--focus-font)">
      <Link href={`/post/${slug}`} passHref>
        <Box as="a" cursor="pointer" p="0rem">
          <Box as="h3" fontWeight="700" fontSize="1.2rem" className="highlight">
            {title}
          </Box>
          {!!subtitle && (
            <Box as="h4" fontWeight="500" fontSize="1.02rem" color="grey">
              {subtitle}
            </Box>
          )}
          <Box>
            {tags.map(tag => (
              <Tag
                key={tag}
                mr="10px"
                p="0"
                size="sm"
                borderRadius="0"
                colorScheme={colorSchemes[Math.floor(Math.random() * colorSchemes.length)]}
                bg="none">
                {tag}
              </Tag>
            ))}
          </Box>
          <Box as="p" m="5px 0 10px">
            {description}
          </Box>
          <Box fontSize="1.12rem" fontWeight="600">
            Read More
            <Icon as={FiArrowRight} ml="3px" className="highlight" opacity={0} />
          </Box>
        </Box>
      </Link>
    </Box>
  </Box>
);

export default Posts;
