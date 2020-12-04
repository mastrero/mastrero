import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

type SeoProps = {
  description?: String;
  lang?: String;
  meta?: Array<any>;
  title?: String;
};

const SEO: FC<SeoProps> = ({ description = '', lang = '', meta = [], title = '' }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || defaultTitle}
      titleTemplate={title ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}>
      {process.env.NODE_ENV === 'production' ? (
        <script
          async
          src="https://insights.mastrero.vercel.app/tracker.js"
          data-ackee-server="https://insights.mastrero.vercel.app"
          data-ackee-domain-id="25cb2c6b-4344-45af-b102-9465d26130d3"></script>
      ) : null}
      <link rel="prerender" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Ruda:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Helmet>
  );
};

export default SEO;
