import React from 'react';
import { Link, graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import PageWrapper from '../components/PageWrapper.js';
import Typed from 'react-typed';

const Index = ({ data }) => (
  <PageWrapper
    pageTitle="Home"
    pageKeywords={[`gatsby`, `application`, `react`]}
    // backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
    bgColor="linear-gradient(135deg,#00C4FF,#9D1BB2)"
  >
    <Container className="index-page">
      <Row>
        <Col className="index-page-wrapper">
          <div className="intro">
            <Link to="/blog/">Developing Blog</Link>
            <br />
            <Img
              alt="Me, Myself, and I"
              className="me"
              fixed={data.placeholderImage.childImageSharp.fixed}
            />
            <Typed strings={['Here you can find anything']} typeSpeed={40} />
            <div className="info">
              <p>
                The career of a professional athlete is short-lived, but the
                skills and experiences attained during the journey last you a
                lifetime. I apply the same drive to succeed as a Web Developer
                where I showcase my retentive learning, creative thinking, and
                superb work ethic. I like finding something new everyday that I
                can create with web development. When I am not huddled over my
                laptop finding a missing semi-colon, I enjoy spending time with
                family, watching quality fútbol, and finding a new place to
                travel to.
              </p>
              <div className="contact">
                contact me!&nbsp;
                <a href="/" target="_blank">
                  <img
                    alt="Email Icon"
                    className="email"
                    src="https://img.Icons8.com/small/90/3d3e3d/filled-message.png"
                  />
                </a>
                <a href="/" target="_blank">
                  <img
                    className="github"
                    alt="Github Icon"
                    src="https://img.icons8.com/ios-glyphs/120/3d3e3d/github.png"
                  />
                </a>
                <a href="/" target="_blank">
                  <img
                    alt="LinkedIn icon"
                    className="lnkdin"
                    src="https://img.icons8.com/ios-filled/100/3d3e3d/linkedin.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </PageWrapper>
);

export default Index;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "code2.jpeg" }) {
      childImageSharp {
        fixed(width: 160) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;
