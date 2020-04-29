import React from 'react';
// import { Link } from 'gatsby';
import { Row, Col, Button } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import resume from '../assets/documents/cesarcastillo_resume.pdf';
import github from '../assets/images/logos/github2.png';
import email from '../assets/images/logos/email.png';
import linkedin from '../assets/images/logos/linkedin.png';

const Contact = () => {
  return (
    <Row>
      <Col className="contact-me">
        <ScrollAnimation
          className="animate"
          animateIn="fadeIn"
          duration={1}
          delay={1350}
          animateOnce={true}
        >
          <h1>Let's work together</h1>
        </ScrollAnimation>
        <div className="contact-icons">
          <ScrollAnimation
            className="animate"
            animateIn="fadeIn"
            duration={1.5}
            delay={250}
            animateOnce={true}
          >
            <a href="mailto:cescastillo25@gmail.com" noopener="true">
              <img alt="Email Icon" src={email} />
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            className="animate"
            animateIn="fadeIn"
            duration={1.5}
            delay={450}
            animateOnce={true}
          >
            <a
              href="https://github.com/cesarcast1llo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img id="margin" alt="Github Icon" src={github} />
            </a>
          </ScrollAnimation>
          <ScrollAnimation
            className="animate"
            animateIn="fadeIn"
            duration={1.5}
            delay={650}
            animateOnce={true}
          >
            <a
              href="https://www.linkedin.com/in/cescastillo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="LinkedIn icon" src={linkedin} />
            </a>
          </ScrollAnimation>
        </div>
        <ScrollAnimation
          className="resume"
          animateIn="fadeIn"
          duration={1.5}
          delay={750}
          animateOnce={true}
        >
          <a href={resume} download>
            <Button className="animated-button draw">Resume</Button>
          </a>
        </ScrollAnimation>
        {/* <p>
                Checkout my <Link to="/blog/">blog</Link> focusing on all
                javascript from problems, polls, and things i see on a daily
                basis

              </p> */}
      </Col>
    </Row>
  );
};

export default Contact;
