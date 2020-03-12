import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import resume from '../../assets/documents/cesarcastillo_resume.pdf';
import pdf from '../../assets/images/logos/pdf.png';
import github from '../../assets/images/logos/github2.png';
import email from '../../assets/images/logos/email.png';
import linkedin from '../../assets/images/logos/linkedin.png';

const Contact = () => {
  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      duration={1}
      delay={250}
      animateOnce={true}
    >
      {' '}
      <Row>
        <Col className="projects">
          <div className="format">
            <div className="resume">
              <h1>Reach Out</h1>
              <div className="contact">
                <a href="/" target="_blank">
                  <img alt="Email Icon" src={email} />
                </a>
                <a href="/" target="_blank">
                  <img alt="Github Icon" src={github} />
                </a>
                <a href="/" target="_blank">
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
        </Col>
      </Row>
    </ScrollAnimation>
  );
};

export default Contact;
