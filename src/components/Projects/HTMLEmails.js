import React, { Component } from 'react';
import { Link } from 'gatsby';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import HTML from '../../assets/images/logos/htmlemail.png';
import css from '../../assets/images/logos/css3.png';
import salesforce from '../../assets/images/logos/salesforce.png';
import eoa from '../../assets/images/logos/eoa.jpg';
import frndly from '../../assets/images/frndly.jpg';

export default class HTMLEmails extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: frndly,
      stack: [
        { name: 'HTML', img: HTML, number: 500 },
        { name: 'CSS', img: css, number: 650 },
        { name: 'Email On Acid', img: eoa, number: 800 },
        { name: 'Salesforce', img: salesforce, number: 950 }
      ]
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
            <Col md={{ size: 6 }} className="project-description">
              <img alt="Frndly Tv" className="project-logo" src={frndly} />
              <Link to="/html/">
                <h1>HTML Emails</h1>
              </Link>

              <p>
                Coded and developed 100+ responsive HTML emails using HTML4,
                Salesforce or React.js. All emails were proofed for HTML best
                practices while being tested on 70+ email clients and devices
                before delivery.
              </p>

              <h2>Developed In:</h2>

              {this.state.stack.map((stack, i) => (
                <div className="logos" key={i}>
                  <ScrollAnimation
                    className="animate"
                    animateIn="fadeIn"
                    duration={2}
                    delay={stack.number}
                    animateOnce={true}
                  >
                    <img alt={stack.name} src={stack.img} />
                  </ScrollAnimation>
                </div>
              ))}
            </Col>
            <Col md={{ size: 6, order: 1 }} className="project-images">
              <img alt="Frndly Tv" src={frndly} />
              <img alt="Frndly Tv" src={frndly} />
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    );
  }
}
