import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Col } from 'reactstrap';
// import { slugify, tagCapital } from '../utils/utilityFunctions.js';
import Header from '../components/pageWrapper/header';
import Footer from '../components/pageWrapper/footer';

const SingleHTMLPost = ({ data, pageContext, location }) => {
  const html = data.markdownRemark.frontmatter;
  const baseUrl = 'https://www.cesarcast1llo.com/';

  return (
    <>
      <Header />
      <SEO
        title={html.title}
        description={html.description}
        url={baseUrl}
        pathname={location.pathname}
      />
      =
      <Col
        col="12"
        className="post-body"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />
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
