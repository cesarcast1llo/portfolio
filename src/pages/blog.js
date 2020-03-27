import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import PageWrapper from '../components/PageWrapper.js';
import Post from '../components/Post';
import { Container, Row, Col } from 'reactstrap';
import devto from '../assets/images/logos/dev.png';

const Blog = () => (
  <PageWrapper
    pageTitle="Blog"
    pageKeywords={[`gatsby`, `application`, `react`]}
    bgColor="blue"
    backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
  >
    <Container className="blog-page-container">
      <Row>
        <Col className="blog-wrapper">
          <div className="blog-intro">
            <h1>Blog</h1>
            <h1>
              All Javascript <br className="em_hide_desktop" />
              Tips and Tricks
            </h1>
            <p>will finish 50 different JS problems by June 2020</p>
            <p>all published on medium(maaaybe) and dev.to</p>
            <a
              href="https://dev.to/cesarcast1llo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={devto} />
            </a>
            <p>
              these are not my articles, this is up to finalize gatsby node
              structure. articles are Lorem Ipsum replacement text, will have
              one up asap
            </p>
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
