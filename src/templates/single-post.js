import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import { Badge, Card, CardSubtitle } from 'reactstrap';
import Img from 'gatsby-image';
import { slugify, tagCapital } from '../utils/utilityFunctions.js';
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
      <h1>{post.title}</h1>

      <Card>
        <Img
          className="card-image-top"
          fluid={post.image.childImageSharp.fluid}
        />
        <CardSubtitle>
          <div className="text-info">{post.date}</div>
        </CardSubtitle>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Card>
      <div style={{ display: 'inline-block' }}>
        <div style={{ textAlign: 'right' }}>
          {post.tags.map(tag => (
            <div key={tag}>
              <Link to={`/tags/${slugify(tag)}`}>
                <Badge color="primary" className="text-uppercase">
                  {tagCapital(tag)}
                </Badge>
              </Link>
            </div>
          ))}
        </div>
        <div style={{ display: 'inline-block' }}>
          <h3 className="text-center" style={{ display: 'inline-block' }}>
            Share this post
          </h3>
          <div
            className="text-center social-share-links"
            style={{ display: 'inline-block' }}
          >
            <a
              href={
                'https://www.facebook.com/sharer/sharer.php?u=' +
                baseUrl +
                pageContext.slug
              }
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f fa-2x" />
              fb
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
              <i className="fab fa-twitter fa-2x" />
              tw
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
              <i className="fab fa-linkedin fa-2x" />
              lnkdin
            </a>
          </div>
        </div>
      </div>
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
