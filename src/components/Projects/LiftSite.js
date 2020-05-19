import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import php from '../../assets/images/logos/php.png';
import gulp from '../../assets/images/logos/gulp.png';
import sass from '../../assets/images/logos/sass.png';
import mamp from '../../assets/images/logos/mamp.png';
import wearelift from '../../assets/images/wearelift.png';

export default class LiftSite extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: wearelift,
      stack: [
        { name: 'PHP', img: php, number: 850 },
        { name: 'Sass', img: sass, number: 1000 },
        { name: 'Gulp', img: gulp, number: 1150 },
        { name: 'MAMP', img: mamp, number: 1300 },
      ],
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
            <Col md={{ size: 5, order: 2 }} className="project-description">
              <a
                href="https://www.wearelift.com/"
                target="_blank rel="
                rel="noopener noreferrer"
              >
                {/* <ScrollAnimation
                  className="animate"
                  animateIn="fadeIn"
                  duration={1}
                  delay={450}
                  animateOnce={true}
                >
                  <img
                    alt="Lift Creative Agency"
                    className="project-logo"
                    src={wearelift}
                  />
                </ScrollAnimation> */}
              </a>
              <a
                href="https://www.wearelift.com/"
                target="_blank rel="
                rel="noopener noreferrer"
              >
                <ScrollAnimation
                  className="animate"
                  animateIn="fadeIn"
                  duration={1}
                  delay={550}
                  animateOnce={true}
                >
                  <h2>Lift Creative Agency</h2>
                </ScrollAnimation>
              </a>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={650}
                animateOnce={true}
              >
                <p>
                  LIFT is a strategic design agency specializing in developing
                  creative ideas that elevate&nbsp;brands.
                </p>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1.5}
                delay={750}
                animateOnce={true}
              >
                <h2 id="developed">Developed In:</h2>
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
            <Col md={{ size: 7, order: 1 }} className="project-images">
              <img alt="LIFT Creative Agency" src={wearelift} />
              {/* <img alt="Frndly Tv" src={wearelift} /> */}
            </Col>
          </Row>
        </div>
      </ScrollAnimation>
    );
  }
}
