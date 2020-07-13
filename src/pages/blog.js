import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PageWrapper from '../components/PageWrapper.js';
import Post from '../components/Post';
import { Container, Row, Col } from 'reactstrap';
// import { Transition } from 'react-spring/renderprops';
import ScrollAnimation from 'react-animate-on-scroll';

// const b = [{ text: 'B' }];
// const l = [{ text: 'l' }];
// const o = [{ text: 'o' }];
// const g = [{ text: 'g' }];

const Blog = () => (
  <PageWrapper
    pageTitle="Blog"
    pageKeywords={[
      `Cesar Castillo Portfolio`,
      `gatsby`,
      `application`,
      `react`,
    ]}
    background="background"
  >
    <Container className="blog-page-container">
      <Row>
        <Col className="blog-wrapper">
          <div className="blog-intro">
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1}
              delay={750}
              animateOnce={true}
            >
              <h1>Blog</h1>
            </ScrollAnimation>
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1}
              delay={750}
              animateOnce={true}
            >
              <h2>All Javascript Tips&nbsp;and&nbsp;Tricks</h2>
            </ScrollAnimation>
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1.5}
              delay={950}
              animateOnce={true}
            >
              <p>
                <strong>Goal:</strong> Write development blogs about my
                daily&nbsp;tasks
              </p>
              <p>
                <strong>Purpose:</strong> Improve my overall comprehension,
                retentiveness, and coding&nbsp;skills.
              </p>
              <p>
                <strong>Focus:</strong> Email Development, Vanilla Javascript,
                Javscript Frameworks, and implementing development procedure for
                tips&nbsp;&&nbsp;hacks.
              </p>
              <p>
                All&nbsp;published on my&nbsp;
                <a href="https://dev.to/cesarcast1llo">
                  <img
                    src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
                    alt="Cesar Castillo's DEV Profile"
                    height="20"
                    width="20"
                  />
                </a>
                &nbsp;
                <a href="https://dev.to/cesarcast1llo">profile</a>
              </p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            className="animate"
            animateIn="fadeIn"
            duration={1.5}
            delay={1150}
            animateOnce={true}
          >
            <StaticQuery
              query={blogQuery}
              render={(data) => {
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
          </ScrollAnimation>
        </Col>
      </Row>
    </Container>
  </PageWrapper>
);

const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
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
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
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
