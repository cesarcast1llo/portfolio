import React from 'react';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import { Badge, Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify, tagCapital } from '../utils/utilityFunctions.js';
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
              <Col md="9" className="tag-container">
                {post.tags.map((tag) => (
                  <Link key={tag} to={`/tags/${slugify(tag)}`}>
                    <Badge className="badge">#{tagCapital(tag)}</Badge>
                  </Link>
                ))}
              </Col>
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
                      'https://www.facebook.com/sharer/sharer.php?u=' +
                      baseUrl +
                      pageContext.slug
                    }
                    className="email"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="email icon"
                      className="email"
                      src="https://img.icons8.com/small/90/000000/filled-message.png"
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
                      src="https://img.icons8.com/material-rounded/100/000000/twitter.png"
                    />
                  </a>
                  <a
                    href={
                      'https://www.linkedin.com/shareArticle?url=' +
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
                      src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"
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
