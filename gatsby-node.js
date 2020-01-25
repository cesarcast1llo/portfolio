const { slugify } = require('./src/utils/utilityFunctions.js');
const path = require('path');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slugFromTitle = slugify(node.frontmatter.title);
    createNodeField({
      node,
      name: 'slug',
      // value: `/blog${value}`
      value: slugFromTitle
    });
  }
};
//creating the path to the blog name,

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const templates = {
    post: path.resolve('./src/templates/single-post.js'),
    tag: path.resolve('./src/templates/tag-posts.js'),
    tagsPage: path.resolve('src/templates/tags-page.js')
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
        slug: node.fields.slug
      }
    });
  });
  //created post for each blog

  // Get all tags
  let tags = [];
  _.each(posts, edge => {
    if (_.get(edge, 'node.frontmatter.tags')) {
      tags = tags.concat(edge.node.frontmatter.tags);
    }
  });

  let tagPostCounts = {}; // { tutorial: 2, design: 1}
  tags.forEach(tag => {
    // Or 0 cause it might not exist yet
    tagPostCounts[tag] = (tagPostCounts[tag] || 0) + 1;
  });

  // Remove duplicates since same id is given to multiple children
  // error in tags-page
  tags = _.uniq(tags);

  // Tags page (all tags)
  createPage({
    path: '/tags',
    component: templates.tagsPage,
    context: {
      tags,
      tagPostCounts
    }
  });

  // Tag posts pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag)}`,
      component: templates.tag,
      context: {
        tag
      }
    });
  });
};
