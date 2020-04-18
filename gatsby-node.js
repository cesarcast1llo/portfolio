const { slugify } = require('./src/utils/utilityFunctions.js');
const path = require('path');
const _ = require('lodash');

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators;

//   if (_.get(node, 'internal.type') === `MarkdownRemark`) {
//     // Get the parent node
//     const parent = getNode(_.get(node, 'parent'));

//     // Create a field on this node for the "collection" of the parent
//     // NOTE: This is necessary so we can filter `allMarkdownRemark` by
//     // `collection` otherwise there is no way to filter for only markdown
//     // documents of type `post`.
//     createNodeField({
//       node,
//       name: 'emails',
//       value: _.get(parent, 'sourceInstanceName'),
//     });
//   }
// };

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      // value: `/blog${value}`
      value: slugFromTitle,
    });
  }
};
//creating the path to the blog name,

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    post: path.resolve('./src/templates/single-blog-post.js'),
    tag: path.resolve('./src/templates/tags-post.js'),
    tagsPage: path.resolve('src/templates/tags-page.js'),
  };

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (res.errors) return Promise.reject(res.errors);

  const posts = res.data.allMarkdownRemark.edges;

  posts.forEach(({ node }) => {
    createPage({
      path: `/blog/${node.fields.slug}`,
      component: templates.post,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
      },
    });
  });
  //created post for each blog

  // Get all tags
  let tags = [];
  _.each(posts, (edge) => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });

  let tagPostCounts = {};
  tags.forEach((tag) => {
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
  });

  tags = _.uniq(tags);

  // Tags page (all tags)
  createPage({
    path: '/tags',
    component: templates.tagsPage,
    context: {
      tags,
      tagPostCounts,
    },
  });

  // Tag posts pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: templates.tag,
      context: {
        tag,
      },
    });
  });
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    html: path.resolve('./src/templates/single-html-post.js'),
  };

  const res = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (res.errors) return Promise.reject(res.errors);

  const html = res.data.allMarkdownRemark.edges;

  html.forEach(({ node }) => {
    createPage({
      path: `/emails/${node.fields.slug}`,
      component: templates.html,
      context: {
        // Passing slug for template to use to fetch the post
        slug: node.fields.slug,
      },
    });
  });
  //created post for each html file
};

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(html)/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src'],
            },
          },
        },
      ],
    },
    plugins: [
      plugins.define({
        __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
      }),
    ],
  });
};
// creating webpack to host HTML emails DB
