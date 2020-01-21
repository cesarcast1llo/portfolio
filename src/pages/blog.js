import React from 'react';
import { Link, StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/Post';
// import '../styles/portfolio.scss';
import { Row, Col, Container } from 'reactstrap';

const Blog = () => (
  <Layout pageTitle="CodeBlog">
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blog-page">
      <Row>
        <Col>
          <div className="blog-header">
            <h1>
              FIND A HERO IMAGE USING THE CSS SLASH GOING UPWARDS
              <br /> make a description before blog starts
            </h1>
          </div>
        </Col>
      </Row>
      <StaticQuery
        query={blogQuery}
        render={data => {
          return (
            <div className="blogs">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
            </div>
          );
        }}
      />
      <Row>
        <Col>All Tags</Col>
      </Row>
    </div>
  </Layout>
);

const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            tags
            image {
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
          excerpt
        }
      }
    }
  }
`;

export default Blog;
