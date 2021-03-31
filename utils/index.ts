export const fetchGraphQL = async (query: string | any) =>
  fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }).then((response: any) => response.json());

export const GQL_FETCH_ALL_POSTS = `query {
      postsCollection {
        items {
          title
          slug
          subtitle
          bannerImage {
            url
            title
          }
          description
          tags
          sys {
            id
            firstPublishedAt
            publishedAt
          }
        }
      }
    }`;
