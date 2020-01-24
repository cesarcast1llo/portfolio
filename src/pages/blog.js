import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Post from '../components/Post';
import '../styles/portfolio.scss';
import { Container, Row, Col } from 'reactstrap';

const Blog = () => (
  // <header></header>
  <>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blog-top-img"></div>
    <Container className="blog-page-container">
      <Row>
        <Col className="blog-wrapper">
          <h1>BLOG - JS PROBLEMS</h1>
          {/* <h2>
            this is my introduction to the blog. from here i will explain what
            is going on and the procedure that happens when i make a blog
          </h2> */}
          <h3>will finish 50 different JS problems by June 2020</h3>
          <StaticQuery
            query={blogQuery}
            render={data => {
              return (
                <>
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
                </>
              );
            }}
          />
        </Col>
      </Row>
    </Container>
  </>
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
            date(formatString: "MMM. Do, YYYY")
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
          excerpt(pruneLength: 225)
        }
      }
    }
  }
`;

export default Blog;
