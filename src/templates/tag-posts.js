import React from 'react';
import { graphql } from 'gatsby';
import Post from '../components/Post';
import { Container, Row, Col } from 'reactstrap';
import PageWrapper from '../components/PageWrapper.js';

const tagPosts = ({ data, pageContext }) => {
  const { tag } = pageContext;
  const { totalCount } = data.allMarkdownRemark;
  const pageHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with `;

  return (
    <PageWrapper
      pageTitle="Tags"
      pageKeywords={['tags', 'topics']}
      bgColor="#3d3e3d"
      backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
    >
      <Container className="single-tag-container">
        <Row>
          <Col className="single-tag-wrapper">
            {pageHeader}
            <div className="tag">{tag}</div>
            <h3>highlight all other matching tag instances</h3>
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
            date(formatString: "MMMM Do YYYY")
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
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;

export default tagPosts;
