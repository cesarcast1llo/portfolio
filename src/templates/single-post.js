import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Badge, Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify, tagCapital } from '../utils/utilityFunctions.js';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import { Link } from 'gatsby';

const SinglePost = ({ data, pageContext, location }) => {
  const post = data.markdownRemark.frontmatter;
  const baseUrl = 'https:/ADDURLHERE.COM/';

  return (
    <Layout>
      <SEO
        title={post.title}
        keywords={post.tags}
        description={post.description}
        url={baseUrl}
        pathname={location.pathname}
      />
      <Container className="single-post">
        <Row>
          <Col md="12" className="post-title">
            {post.title}
          </Col>
          <Col md="12" className="image-container">
            <Img
              className="card-image-top"
              fluid={post.image.childImageSharp.fluid}
            />
          </Col>
        </Row>
        <Row>
          <Col className="post-copy">
            <div className="post-date">add clock icon {post.date}</div>

            <div
              className="post-body"
              dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
            />
          </Col>
        </Row>
        <Row>
          <Col sm="6" className="sm-container">
            <h3 className="share">Share this post: </h3>
            <div className="social-share-links">
              <a
                href={
                  'https://www.facebook.com/sharer/sharer.php?u=' +
                  baseUrl +
                  pageContext.slug
                }
                className="fb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-official" aria-hidden="true"></i>
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
                className="twit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-spinner fa-spin"></i>
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
                <i className="fa fa-spinner fa-spin"></i>
              </a>
            </div>
          </Col>
          <Col sm="6" className="tag-container">
            <div className="tags">
              {post.tags.map(tag => (
                <Link key={tag} to={`/tags/${slugify(tag)}`}>
                  <Badge className="badge">{tagCapital(tag)}</Badge>
                </Link>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
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
