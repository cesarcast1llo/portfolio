import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';

const Me = props => {
  return (
    <ScrollAnimation animateIn="slideInUp" duration={1} animateOnce={true}>
      <Row>
        <Col className="index-page-wrapper">
          <div className="intro">
            <Link to="/blog/">Developing Blog</Link>

            {/* <div className="typed-wrapper"> */}
            {/* <Typed
          className="info"
          strings={['Hello', 'Hola', 'Bonjour', 'Olá', 'Gluten Tag']}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" />
        </Typed> */}
            {/* </div> */}
            <ScrollAnimation animateIn="fadeIn" delay={1150} animateOnce={true}>
              <div className="contact">
                Hello.
                <br /> contact me:&nbsp;
                <a href="/" target="_blank">
                  <img alt="Email Icon" className="email" />
                </a>
                <a href="/" target="_blank">
                  <img className="github" alt="Github Icon" />
                </a>
                <a href="/" target="_blank">
                  <img alt="LinkedIn icon" className="lnkdin" />
                </a>
              </div>

              <div className="info">
                <p>
                  Lorem Ipsum log latin language for text fill Lorem Ipsum log
                  latin language for text fillLorem Ipsum log latin language for
                  text fill Lorem Ipsum log latin language for text fill Lorem
                  Ipsum log latin language for text fill Lorem Ipsum log latin
                  language for text fillLorem Ipsum log latin language for text
                  fill
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    </ScrollAnimation>
  );
};

export default Me;
