import React from 'react';
import { Link, StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/Post';
import { Row, Col } from 'reactstrap';

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <Row>
      <Col>
        <div style={{ border: '1px solid red', textAlign: 'center' }}>
          <h1>Hi from the blog page</h1>
        </div>
      </Col>
    </Row>
    <br />
    <Link to="/">Go back to the home</Link>
    <br /> <br />
    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                body={node.excerpt}
                fluid={node.frontmatter.Image.childImageSharp.fluid}
                tags={node.frontmatter.tags}
              />
            ))}
          </div>
        );
      }}
    />
  </Layout>
);

const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            tags
            Image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(format: MARKDOWN)
        }
      }
    }
  }
`;

export default Blog;
