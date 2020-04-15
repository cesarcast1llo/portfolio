import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PageWrapper from '../components/PageWrapper.js';
import Post from '../components/Post';
import { Container, Row, Col } from 'reactstrap';
import { Transition } from 'react-spring/renderprops';
import devto from '../assets/images/logos/dev.png';

const b = [{ text: 'B' }];
const l = [{ text: 'l' }];
const o = [{ text: 'o' }];
const g = [{ text: 'g' }];

const Blog = () => (
  <PageWrapper
    pageTitle="Blog"
    pageKeywords={[`gatsby`, `application`, `react`]}
    bgColor="#3d3e3d"
    // backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
  >
    <Container className="blog-page-container">
      <Row>
        <Col className="blog-wrapper">
          <div className="blog-intro">
            <Transition
              items={b}
              keys={(item) => item.key}
              delay="500"
              from={{ transform: 'translate3d(0,-900px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
            >
              {(item) => (props) => (
                <p className="blog-title" style={props}>
                  {item.text}
                </p>
              )}
            </Transition>
            <Transition
              items={l}
              keys={(item) => item.key}
              delay="500"
              from={{ transform: 'translate3d(0,-900px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
            >
              {(item) => (props) => (
                <p className="blog-title" style={props}>
                  {item.text}
                </p>
              )}
            </Transition>
            <Transition
              items={o}
              keys={(item) => item.key}
              delay="500"
              from={{ transform: 'translate3d(0,-900px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
            >
              {(item) => (props) => (
                <p className="blog-title" style={props}>
                  {item.text}
                </p>
              )}
            </Transition>
            <Transition
              items={g}
              keys={(item) => item.key}
              delay="500"
              from={{ transform: 'translate3d(0,-900px,0)' }}
              enter={{ transform: 'translate3d(0,0px,0)' }}
            >
              {(item) => (props) => (
                <p className="blog-title" style={props}>
                  {item.text}
                </p>
              )}
            </Transition>
            <h2>All Javascript Tips&nbsp;and&nbsp;Tricks</h2>
            <p>
              will finish 50 different JS problems by June 2020. all published
              on my dev.to and medium. posting to: improve my coding skills
              mainly javascript skills, building Javascript based projects using
              Vanila JS, and to help others in the same situation I was in
              looking for&nbsp;solutions.
            </p>
            <a
              href="https://dev.to/cesarcast1llo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={devto} alt="Dev.to" />
            </a>
          </div>
          <StaticQuery
            query={blogQuery}
            render={(data) => {
              return (
                <>
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
                </>
              );
            }}
          />
        </Col>
      </Row>
    </Container>
  </PageWrapper>
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
            date(formatString: "MMM. Do, YYYY")
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
          excerpt(pruneLength: 225)
        }
      }
    }
  }
`;

export default Blog;
