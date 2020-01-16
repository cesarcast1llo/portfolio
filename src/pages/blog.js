import React from 'react';
import { Link, StaticQuery } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/Post';
import { Row, Col } from 'reactstrap';

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the blog page</h1>
    <Row>
      <Col>
        <div style={{ border: '1px solid red', width: 100 }}></div>
      </Col>
    </Row>

    <Link to="/">Go back to the home</Link>
    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                key={node.id}
                title={node.frontmatter.title}
                path={node.frontmatter.path}
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
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM-DD-YYYY")
            path
            tags
            Image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
