import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
// import { slugify, tagCapital } from '../utils/utilityFunctions.js';
import Header from '../components/pageWrapper/header';
import Footer from '../components/pageWrapper/footer';

const SingleHTMLPost = ({ data, pageContext, location }) => {
  const html = data.markdownRemark.frontmatter;
  const baseUrl = 'https:/ADDURLHERE.COM/';

  return (
    <>
      <Header />
      <Img
        id="hero"
        alt="HTML Image"
        className="hero-image-top"
        fluid={html.image.childImageSharp.fluid}
      />
      <SEO
        title={html.title}
        description={html.description}
        url={baseUrl}
        pathname={location.pathname}
      />
      <Container className="single-blog-container ">
        <Row>
          <Col className="post-copy">
            <Row>
              <Col className="post-title">{html.title}</Col>
            </Row>
            <Row>
              <Col
                col="12"
                className="post-body"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export const HTMLPostQuery = graphql`
  query htmlPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default SingleHTMLPost;
