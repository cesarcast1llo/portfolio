import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Post from '../components/Post';
import { slugify, tagCapital } from '../utils/utilityFunctions.js';

const tagPosts = ({ data, pageContext }) => {
  const { tags, tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tags}"`;

  return (
    <Layout pageTitle={pageHeader}>
      <h1>
        Posts with --->
        <span style={{ textDecoration: 'underline' }}>{tagCapital(tag)}</span>
      </h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          body={node.excerpt}
          tags={node.frontmatter.tags}
          fluid={node.frontmatter.image.childImageSharp.fluid}
        />
      ))}
    </Layout>
  );
};

export const tagQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 650, maxHeight: 371) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;

export default tagPosts;
