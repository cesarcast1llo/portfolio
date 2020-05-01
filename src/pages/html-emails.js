import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import HTMLpost from '../components/HTMLpost';
import PageWrapper from '../components/PageWrapper.js';
import { Container, Row, Col } from 'reactstrap';

const Emails = () => (
  <PageWrapper
    pageTitle="Email Portal"
    pageKeywords={[`gatsby`, `application`, `react`]}
    bgColor="blue"
    // backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
  >
    <Container className="email-portal-container">
      <Row>
        <Col className="email-portal">
          <div className="intro">HTML Emails</div>
          <div className="description">
            <p>
              Coded and proofed 100+ responsive HTML emails using HTML4,
              Salesforce or React.js.
            </p>
            <p>
              All emails have been proofed and checked for HTML validation.
              Tested on 70+ email clients and devices locally, and on either
              Email on Acid or Litmus for desktop and mobile responsiveness.
            </p>
          </div>
        </Col>
      </Row>
      <div className="email-container">
        <StaticQuery
          query={htmlQuery}
          render={(data) => {
            return (
              <>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                  <HTMLpost
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
      </div>
    </Container>
  </PageWrapper>
);

const htmlQuery = graphql`
  query htmlQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/emails/" } }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 500) {
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

export default Emails;
