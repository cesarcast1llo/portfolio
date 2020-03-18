import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import php from '../../assets/images/logos/php.png';
import gulp from '../../assets/images/logos/gulp.png';
import sass from '../../assets/images/logos/sass.png';
import mamp from '../../assets/images/logos/mamp.png';
import wearelift from '../../assets/images/LIFT-Agency.png';

export default class LiftSite extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: wearelift,
      stack: [
        { name: 'PHP', img: php, number: 350 },
        { name: 'Sass', img: sass, number: 450 },
        { name: 'Gulp', img: gulp, number: 550 },
        { name: 'MAMP', img: mamp, number: 650 }
      ]
    };
  }

  render() {
    return (
      <ScrollAnimation
        animateIn="fadeInRight"
        duration={1}
        delay={250}
        animateOnce={true}
      >
        <div className="project-layout">
          <Row>
            <Col md={{ size: 6, order: 2 }} className="project-description">
              <a
                href="https://www.wearelift.com/"
                target="_blank rel="
                rel="noopener noreferrer"
              >
                <img alt="Frndly Tv" className="project-logo" src={wearelift} />
              </a>
              <a
                href="https://www.wearelift.com/"
                target="_blank rel="
                rel="noopener noreferrer"
              >
                <h1>WeAreLift.com</h1>
              </a>
              <p>
                Lorem ipsuma asfa asdasde asdasd asdasdbu ipsuma asfa asdasde
                {/* asdasd asdasdbu ipsuma asfa asdasde asdasd asdasdbu ipsuma asfa
                asdasde asdasd asdasdbu */}
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
              <img alt="Frndly Tv" src={wearelift} />
              <img alt="Frndly Tv" src={wearelift} />
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    );
  }
}
