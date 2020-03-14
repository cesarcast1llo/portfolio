import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import resume from '../../assets/documents/cesarcastillo_resume.pdf';
import github from '../../assets/images/logos/github.png';
import email from '../../assets/images/logos/email-white.png';
import linkedin from '../../assets/images/logos/linkedin-white.png';

const Contact = () => {
  return (
    <Row>
      <Col id="last" className="odd">
        <ScrollAnimation
          animateIn="fadeInLeft"
          duration={1}
          delay={250}
          animateOnce={true}
        >
          <div className="format">
            <div className="resume">
              <h1>Reach Out</h1>
              <div className="contact">
                <a href="mailto:cescastillo25@gmail.com" noopener="true">
                  <img alt="Email Icon" src={email} />
                </a>
                <a
                  href="https://github.com/cesarcast1llo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img id="margin" alt="Github Icon" src={github} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cescastillo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img alt="LinkedIn icon" src={linkedin} />
                </a>
              </div>
              <h3>
                <a href={resume} download>
                  Download my resume
                </a>
              </h3>
              <p>
                checkout my <Link to="/blog/">blog</Link> focusing on all
                javascript from problems, polls, and things i see on a daily
                basis
              </p>
            </div>
            <br />
          </div>
        </ScrollAnimation>
      </Col>
    </Row>
  );
};

export default Contact;
