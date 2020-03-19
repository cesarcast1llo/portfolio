import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import javascript from '../../assets/images/logos/javascript.png';
import next from '../../assets/images/logos/nextjsblack.svg';
import sass from '../../assets/images/logos/sass.png';
import node from '../../assets/images/logos/nodejs.png';
import frndly from '../../assets/images/frndly.jpg';

export default class FrndlyTv extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: frndly,
      stack: [
        { name: 'Next.js', img: next, number: 500 },
        { name: 'Javascript', img: javascript, number: 650 },
        { name: 'Sass', img: sass, number: 800 },
        { name: 'Node.js', img: node, number: 950 }
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
              <a
                href="https://www.frndlytv.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="Frndly Tv" className="project-logo" src={frndly} />
                <h1>Friendly TV</h1>
              </a>

              <p>Live TV internet-based streaming TV&nbsp;service</p>

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
