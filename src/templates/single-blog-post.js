import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
// import { slugify, tagCapital } from '../utils/utilityFunctions.js';
import Header from '../components/pageWrapper/header';
import Footer from '../components/pageWrapper/footer';

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter;
  const baseUrl = 'https://www.cesarcast1llo.com/';

  return (
    <>
      <Header />
      <Img
        id="hero"
        alt="Blog Image"
        className="hero-image-top"
        fluid={post.image.childImageSharp.fluid}
      />
      <SEO
        title={post.title}
        keywords={post.tags}
        description={post.description}
        url={baseUrl}
        pathname={location.pathname}
      />
      <Container className="single-blog-container ">
        <Row>
          <Col className="post-copy">
            <Row>
              <Col className="post-title">{post.title}</Col>
            </Row>
            <Row>
              <Col md="3" className="post-date">
                <img
                  alt="calendar"
                  className="calendar"
                  src="https://img.icons8.com/android/24/3e3f3e/calendar.png"
                />
                &nbsp;{post.date}
              </Col>
              {/* TODO find why this is getting can't map over null in netlify */}
              {/* <Col md="9" className="tag-container">
                {post.tags.map(function(tag, index) {
                  return (
                    <Link key={tag} to={`/tags/${slugify(tag)}`}>
                      <Badge className="badge">#{tagCapital(tag)}</Badge>
                    </Link>
                  );
                })}
              </Col> */}
            </Row>
            <Row>
              <Col
                col="12"
                className="post-body"
                dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
              />
            </Row>
            <Row>
              <Col col="12" className="sm-container">
                Share:&nbsp;
                <div className="social-share-links">
                  <a
                    href={
                      'mailto:?subject=' +
                      'Cesar Castillo - Blog Post ' +
                      post.date +
                      '&body=' +
                      baseUrl +
                      pageContext.slug
                    }
                    className="email"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="email icon"
                      className="email"
                      src="https://img.icons8.com/small/90/3e3f3e/filled-message.png"
                    />
                  </a>
                  <a
                    href={
                      'https://twitter.com/share?url=' +
                      baseUrl +
                      pageContext.slug +
                      '&text=' +
                      post.title +
                      '&via' +
                      'twitterHandle'
                    }
                    className="twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="Twitter icon"
                      className="twit"
                      src="https://img.icons8.com/material-rounded/100/3e3f3e/twitter.png"
                    />
                  </a>
                  <a
                    href={
                      'http://www.linkedin.com/shareArticle?mini=true&url=' +
                      baseUrl +
                      pageContext.slug +
                      '&source=' +
                      baseUrl +
                      pageContext.slug
                    }
                    className="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="LinkedIn icon"
                      className="lnkdin"
                      src="https://img.icons8.com/ios-filled/100/3e3f3e/linkedin.png"
                    />
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export const postQuery = graphql`
  query blogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMM Do YYYY")
        tags
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

export default SinglePost;
