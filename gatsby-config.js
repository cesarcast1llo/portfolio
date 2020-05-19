module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    author: `Cesar Castillo`,
    description: `Portfolio showcasing my skills and past work while authoring blogs to help others in the same situation`,
    siteUrl: `https://www.cesarcast1llo.com/`,
    social: {
      github: `https://github.com/cesarcast1llo`,
      linkedin: `https://www.linkedin.com/in/cescastillo/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images/emails`,
        path: `${__dirname}/src/assets/images/emails`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images/blog-imgs`,
        path: `${__dirname}/src/assets/images/blog-imgs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'emails',
        path: `${__dirname}/src/pages/emails`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `src/assets/images/ccc.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || `none`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
