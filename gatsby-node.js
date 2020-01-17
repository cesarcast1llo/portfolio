const { slugify } = require('./src/utils/utilityFunctions.js');
const path = require('path');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      value: slugFromTitle
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    post: path.resolve('src/templates/single-post.js'),
    // postList: path.resolve('src/templates/post-list.js'),
    tag: path.resolve('src/templates/tag-posts.js')
    // tagsPage: path.resolve('src/templates/tags-page.js'),
  };
  return graphql(`
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
  `).then(res => {
    if (res.errors) return Promise.reject(res.errors);

    const posts = res.data.allMarkdownRemark.edges;

    posts.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: templates.post,
        context: {
          // Passing slug for template to use to fetch the post
          slug: node.fields.slug
        }
      });
    });
  });
};
