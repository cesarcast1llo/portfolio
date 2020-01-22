import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Post from '../components/Post';
// import '../styles/portfolio.scss';
import { Container } from 'reactstrap';

const Blog = () => (
  <Layout pageTitle="CodeBlog">
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="blog-page">
      <div className="blog-header">
        <h1>
          FIND A HERO IMAGE USING THE CSS SLASH GOING UPWARDS
          <br /> make a description before blog starts
        </h1>
      </div>
      <StaticQuery
        query={blogQuery}
        render={data => {
          return (
            <Container className="blogs-cont">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <Post
                  key={node.id}
                  title={node.frontmatter.title}
                  slug={node.fields.slug}
                  body={node.excerpt}
                  date={node.frontmatter.date}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                  tags={node.frontmatter.tags}
                />
              ))}
            </Container>
          );
        }}
      />
    </div>
  </Layout>
);

const blogQuery = graphql`
  query blogQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2000
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt(pruneLength: 190)
        }
      }
    }
  }
`;

export default Blog;
