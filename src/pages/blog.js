import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import PageWrapper from '../components/PageWrapper.js';
import Post from '../components/Post';
import { Container, Row, Col } from 'reactstrap';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const Blog = () => (
  <PageWrapper
    pageTitle="Blog"
    pageKeywords={[`gatsby`, `application`, `react`]}
    bgColor="#3d3e3d"
    backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
  >
    <Container className="blog-page-container">
      <Row>
        <Col className="blog-wrapper">
          <div className="blog-intro">
            <p>BLOG - JS PROBLEMS</p>
            <h3>will finish 50 different JS problems by June 2020</h3>
          </div>
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
  </PageWrapper>
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
                fluid(maxWidth: 900) {
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
