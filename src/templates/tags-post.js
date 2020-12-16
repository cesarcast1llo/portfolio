import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import { Container, Row, Col } from 'reactstrap';
import PageWrapper from '../components/PageWrapper.js';
import ScrollAnimation from 'react-animate-on-scroll';

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;

  const pageHeader = `
    ${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with 
  `;

  return (
    <PageWrapper pageTitle="Tags" pageKeywords={['tags', 'topics']} background="background">
      <Container className="single-tag-container">
        <Row>
          <Col className="single-tag-wrapper">
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1}
              delay={350}
              animateOnce={true}
            >
              <div className="tag-intro">
                <p>
                  {pageHeader} <i>{tag}</i>
                </p>
              </div>
            </ScrollAnimation>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={550}
                animateOnce={true}
              >
                <Post
                  key={node.id}
                  slug={node.fields.slug}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  body={node.excerpt}
                  tags={node.frontmatter.tags}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
              </ScrollAnimation>
            ))}
          </Col>
        </Row>
      </Container>
    </PageWrapper>
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

export default tagPosts;
