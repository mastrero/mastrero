module.exports = {
  siteMetadata: {
    title: `ArunKumar Nadikattu ~ Mastrero`,
    siteUrl: `https://mastrero.vercel.app`,
    description: `Hello! I am ArunKumar Nadikattu, a enthusiastic web developer, focused on the design and development of digital products.`,
    author: `@mastrero`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cache`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: false,
        autoLabel: 'dev-only',
        labelFormat: `[name]`,
        cssPropOptimization: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://mastrero.vercel.app',
        sitemap: 'https://mastrero.vercel.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ArunKumar | Mastrero`,
        short_name: `AK | mastrero`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `./static/logo512.png`,
      },
    },
  ],
};
