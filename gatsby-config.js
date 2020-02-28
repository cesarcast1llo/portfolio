module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    author: `Cesar Castillo`,
    description: `Building portfolio as well as blog to showcase my experience and JS logic`,
    siteUrl: `https://www.cesarcast1llo.com/`,
    social: {
      github: `https://github.com/cesarcast1llo`,
      linkedin: `https://www.linkedin.com/in/cescastillo/`
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/c.png`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`
      }
    },
    // {
    //   resolve: `gatsby-source-github-api`,
    //   options: {
    //     token: process.env.GITHUB_TOKEN,
    //     graphQLQuery: `{
    //           search(query: "fmonteslab user:fmontes", type: REPOSITORY, first: 10) {
    //               edges {
    //                   node {
    //                       ... on Repository {
    //                           name
    //                           url
    //                           homepageUrl
    //                           description
    //                           createdAt
    //                           pushedAt
    //                           primaryLanguage {
    //                               id
    //                               name
    //                           }
    //                           repositoryTopics(first: 100) {
    //                               edges {
    //                                   node {
    //                                       topic {
    //                                           name
    //                                       }
    //                                   }
    //                               }
    //                           }
    //                       }
    //                   }
    //               }
    //           }
    //       }
    //       `
    //   }
    // },
    `gatsby-plugin-offline`
  ]
};
