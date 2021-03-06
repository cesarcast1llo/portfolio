import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import javascript from '../../assets/images/logos/javascript.png';
import next from '../../assets/images/logos/nextjs.png';
import sass from '../../assets/images/logos/sass.png';
import node from '../../assets/images/logos/nodejs.png';
import frndly from '../../assets/images/frndlytv.png';
import frndlyOpt from '../../assets/images/frndlytv-opt.png';

export default class FrndlyTv extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: frndly,
      stack: [
        { name: 'Next-js', img: next, number: 850 },
        { name: 'Javascript', img: javascript, number: 1000 },
        { name: 'Sass', img: sass, number: 1150 },
        { name: 'Node-js', img: node, number: 1300 },
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
            <Col md={{ size: 12 }} >
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={550}
                animateOnce={true} >
                <h2>Frndly TV</h2>
              </ScrollAnimation>
            </Col>
            <Col md={{ size: 5 }} className="project-description">
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={650}
                animateOnce={true}
              >
                <p>Live internet-based streaming TV&nbsp;service.</p>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={750}
                animateOnce={true}
              >
                <div class="developed">
                  <h3>Developed In:</h3>
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
                </div>
              </ScrollAnimation>
            </Col>
            <Col md={{ size: 7, order: 1 }} className="project-images">
              <img alt="Frndly Tv" src={frndlyOpt} />
              {/* <img alt="Frndly Tv" src={frndly} /> */}
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    );
  }
}
