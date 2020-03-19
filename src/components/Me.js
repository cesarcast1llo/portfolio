import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import github from '../assets/images/logos/github2.png';
import email from '../assets/images/logos/email.png';
import linkedin from '../assets/images/logos/linkedin.png';

const Me = props => {
  const data = useStaticQuery(graphql`
    {
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
  `);
  return (
    <ScrollAnimation animateIn="slideInUp" duration={1} animateOnce={true}>
      <Row>
        <Col className="index-page-wrapper">
          <div className="intro">
            {/* <Link to="/blog/">Developing Blog</Link>s */}
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1.5}
              delay={550}
              animateOnce={true}
            >
              <Img
                fixed={data.file.childImageSharp.fixed}
                alt="CC"
                className="logo-img"
              />
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
                  Versatile Front-End Developer with 2+ years of experience
                  designing, developing, and managing complex sites and internal
                  frameworks. Passion for responsive website design and
                  mobile-first&nbsp;approach.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={950}
                animateOnce={true}
              >
                <p>
                  The career of a professional athlete is short-lived, but the
                  skills and experiences attained during the journey last you a
                  lifetime. I apply the same drive to succeed as a Web Developer
                  where I showcase my retentive learning, creative thinking, and
                  superb work ethic. I like finding something new everyday that
                  I can create with web development. When I am not huddled over
                  my laptop finding a missing semi-colon, I enjoy spending time
                  with family, watching quality fútbol, and finding a new place
                  to travel&nbsp;to.
                </p>
              </ScrollAnimation>
            </div>

            <div className="contact">
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={950}
                animateOnce={true}
              >
                <a href="/" target="_blank" rel="noopener">
                  <img alt="Email Icon" src={email} />
                </a>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={1050}
                animateOnce={true}
              >
                <a href="/" target="_blank" rel="noopener">
                  <img id="margin" alt="Github Icon" src={github} />
                </a>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={1150}
                animateOnce={true}
              >
                <a href="/" target="_blank" rel="noopener">
                  <img alt="LinkedIn icon" src={linkedin} />
                </a>
              </ScrollAnimation>
            </div>
          </div>
        </Col>
      </Row>
    </ScrollAnimation>
  );
};

export default Me;
