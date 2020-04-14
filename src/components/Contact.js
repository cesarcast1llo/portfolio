import React from 'react';
// import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
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
          animateIn="fadeIn"
          duration={1}
          delay={1150}
          animateOnce={true}
        >
          <h1>Let's work together</h1>
          <div className="contact-icons">
            <ScrollAnimation
              className="animate"
              animateIn="fadeIn"
              duration={1.5}
              delay={350}
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
              delay={550}
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
          <h3>
            <a href={resume} download>
              Resume
            </a>
          </h3>
          {/* <p>
                Checkout my <Link to="/blog/">blog</Link> focusing on all
                javascript from problems, polls, and things i see on a daily
                basis

              </p> */}
        </ScrollAnimation>
      </Col>
    </Row>
  );
};

export default Contact;
