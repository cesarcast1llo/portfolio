import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Contact from '../components/Contact';

const Me = (props) => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cesAvatar.png" }
      ) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Row>
      <Col className="index-page-wrapper">
        <div className="intro">
          <ScrollAnimation
            className="animate"
            animateIn="fadeIn"
            duration={3}
            delay={550}
            animateOnce={true}
          >
            <Img
              fixed={data.file.childImageSharp.fixed}
              alt="CC"
              className="me"
            />
            <h1>Cesar Castillo</h1>
          </ScrollAnimation>
          <div className="info">
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1.5}
              delay={750}
              animateOnce={true}
            >
              <p>
                Versatile <span id="frontend">Front End Developer</span> with 3
                years of experience designing, developing, and managing complex
                sites and internal frameworks. Passion for responsive website
                design and <span>mobile-first approach.</span>
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1.5}
              delay={950}
              animateOnce={true}
            >
              <p className="last">
                The career of a professional athlete is short-lived, but the
                skills and experiences attained during the journey last you a
                lifetime. I apply the same drive to succeed as a{' '}
                <span id="frontend">Front End Developer</span> where I showcase
                my retentive learning, creative thinking, and superb work ethic.
                I like finding something new everyday that I can create with web
                development. When I am not huddled over my laptop, I enjoy
                spending time with family, watching quality fútbol, and finding
                a new place to&nbsp;travel&nbsp;to.
              </p>
            </ScrollAnimation>
          </div>
        </div>
        <Contact />
      </Col>
    </Row>
  );
};

export default Me;
