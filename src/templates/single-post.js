import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Badge, Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify, tagCapital } from '../utils/utilityFunctions.js';
import { Link } from 'gatsby';

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter;
  const baseUrl = 'https:/ADDURLHERE.COM/';

  return (
    <div className="single-post">
      <Img
        className="card-image-top"
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
            <Col className="post-title">{post.title}</Col>
            <Row>
              <Col md="3" className="post-date">
                <img
                  alt="calendar"
                  className="calendar"
                  src="https://img.icons8.com/android/24/000000/calendar.png"
                />
                &nbsp;{post.date}
              </Col>
              <Col md="9" className="tag-container">
                {post.tags.map(tag => (
                  <Link key={tag} to={`/tags/${slugify(tag)}`}>
                    <Badge className="badge">#{tagCapital(tag)}</Badge>
                  </Link>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
        <Col
          col="12"
          className="post-body"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
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
                  className="lnkdin"
                  src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"
                />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
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
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default SinglePost;
