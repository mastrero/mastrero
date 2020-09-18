const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `ArunKumar Nadikattu | Mastrero`,
    description: `Hello! I am ArunKumar Nadikattu, a enthusiastic web developer, focused on the design and development of digital products.`,
    author: `@mastrero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cache`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false,
        fileName: false,
        minify: true,
        transpileTemplateLiterals: false,
      },
    },
    {
      resolve: 'gatsby-plugin-brotli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ArunKumar | Mastrero`,
        short_name: `AK | mastrero`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/static/logo512.png`,
      },
    },
  ],
};
