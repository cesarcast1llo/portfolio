import React, { Component } from 'react';
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
        { name: 'HTML', img: HTML, number: 350 },
        { name: 'CSS', img: css, number: 450 },
        { name: 'Email On Acid', img: eoa, number: 550 },
        { name: 'Salesforce', img: salesforce, number: 650 }
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
              <h1>HTML Emails</h1>
              <p>
                Lorem ipsuma asfa asdasde asdasd asdasdbu ipsuma asfa asdasde
                asdasd asdasdbu ipsuma asfa asdasde asdasd asdasdbu ipsuma asfa
                asdasde asdasd asdasdbu
              </p>
              <h2>What I used:</h2>

              {this.state.stack.map((stack, i) => (
                <div className="logos" key={i}>
                  <ScrollAnimation
                    animateIn="fadeIn"
                    duration={2.5}
                    animateOnce={true}
                    key={i}
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
