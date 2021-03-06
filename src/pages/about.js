import React from 'react';
import { graphql } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import PageWrapper from '../components/PageWrapper.js';

const About = ({ data }) => (
  <PageWrapper
    pageTitle="About"
    pageKeywords={[
      `Cesar Castillo Portfolio`,
      `gatsby`,
      `application`,
      `react`,
    ]}
    background="background"
  >
    <Container className="about-page">
      <Row>
        <Col className="about-page-wrapper">
          <div className="about">
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="CC"
              className="logo-img"
            />
            <h1>Cesar Castillo</h1>
            <p>
              The career of a professional athlete is short-lived, but the
              skills and experiences attained during the journey last you a
              lifetime. I apply the same drive to succeed as a Web Developer
              where I showcase my retentive learning, creative thinking, and
              superb work ethic. I like finding something new everyday that I
              can create with web development. When I am not huddled over my
              laptop finding a missing semi-colon, I enjoy spending time with
              family, watching quality fútbol, and finding a new place to travel
              to.
            </p>
            <h2>1992-2017</h2>
            <h3>COMING SOON..</h3>
            {/* <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </p> */}
            <h2>2017-Present</h2>
            <h3>COMING SOON..</h3>
            {/* <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </p> */}
            <h2>Coding Time</h2>
          </div>

          <div className="coding-time">
            <img
              className="coding-chart"
              alt="Coding Time, last seven days"
              src="https://wakatime.com/share/@c748e2cc-d321-4212-8e58-ccb0e2142b08/e41390c0-8804-43e8-a158-db614c80fd68.png"
            />
          </div>
          {/* <div className="quotes">
            <h1>ADD QUOTES HERE FROM FAV BOOKS</h1>
          </div> */}
        </Col>
      </Row>
    </Container>
  </PageWrapper>
);

export default About;

export const query = graphql`
  query {
    file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "gatsby-astronaut.png" }
    ) {
      childImageSharp {
        fixed(width: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
