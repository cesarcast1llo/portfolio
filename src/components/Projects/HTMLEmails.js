import React, { Component } from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col, Button } from 'reactstrap';
import HTML from '../../assets/images/logos/htmlemail.png';
import css from '../../assets/images/logos/css3.png';
import salesforce from '../../assets/images/logos/salesforce.png';
import eoa from '../../assets/images/logos/eoa.png';
import frndly from '../../assets/images/frndly.jpg';

export default class HTMLEmails extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: frndly,
      stack: [
        { name: 'HTML', img: HTML, number: 850 },
        { name: 'CSS', img: css, number: 1000 },
        { name: 'Email On Acid', img: eoa, number: 1150 },
        { name: 'Salesforce', img: salesforce, number: 1300 },
      ],
    };
  }

  render() {
    return (
      <ScrollAnimation
        animateIn="fadeInLeft"
        duration={1}
        delay={250}
        animateOnce={true}
      >
        <div className="project-layout">
          <Row>
            <Col md={{ size: 12 }} className="project-description">
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={450}
                animateOnce={true}
              ></ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={550}
                animateOnce={true}
              >
                <Link to="/emails">
                  <h1>HTML Emails</h1>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={650}
                animateOnce={true}
              >
                <p>
                  Coded and proofed 100+ responsive HTML emails using HTML4,
                  Salesforce or React.js. All emails were proofed for HTML best
                  practices while being tested on 70+ email clients and devices
                  before&nbsp;delivery.
                </p>
                <Link to="/html-emails">
                  <Button className="email-btn">Email Portal</Button>
                </Link>
              </ScrollAnimation>

              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={750}
                animateOnce={true}
              >
                <h2>Developed In:</h2>
              </ScrollAnimation>
              {this.state.stack.map((stack, i) => (
                <div className="logos" key={i}>
                  <ScrollAnimation
                    className="animate"
                    animateIn="fadeIn"
                    duration={1}
                    delay={stack.number}
                    animateOnce={true}
                  >
                    <img
                      className={stack.name}
                      alt={stack.name}
                      src={stack.img}
                    />
                  </ScrollAnimation>
                </div>
              ))}
            </Col>
            {/* <Col md={{ size: 6, order: 1 }} className="project-images">
              <img alt="Frndly Tv" src={frndly} />
            </Col> */}
          </Row>
        </div>
      </ScrollAnimation>
    );
  }
}
