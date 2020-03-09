import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Row, Col } from 'reactstrap';
import javascript from '../../assets/images/logos/javascript.png';
import next from '../../assets/images/logos/nextjs.png';
import react from '../../assets/images/logos/react.png';
import node from '../../assets/images/logos/nodejs.png';
import frndly from '../../assets/images/frndly.jpg';

// import ScrollAnimation from 'react-animate-on-scroll';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Frndly TV',
      img: frndly,
      stack: [
        { name: 'Node.js', img: node, number: 350 },
        { name: 'Next.js', img: next, number: 450 },
        { name: 'Javascript', img: javascript, number: 550 },
        { name: 'React.js', img: react, number: 650 }
      ]
    };
  }

  render() {
    return (
      <div className="project-layout">
        <Row>
          <Col sm={{ size: 6, order: 2 }} className="project-description">
            <img alt="Frndly Tv" className="project-logo" src={frndly} />
            <h1>astafs we auasd</h1>
            <p>
              Lorem ipsuma asfa asdasde asdasd asdasdbu ipsuma asfa asdasde
              asdasd asdasdbu ipsuma asfa asdasde asdasd asdasdbu ipsuma asfa
              asdasde asdasd asdasdbu
            </p>

            {this.state.stack.map((stack, i) => (
              <ScrollAnimation
                animateIn="fadeIn"
                duration={2.5}
                animateOnce={true}
                key={i}
              >
                <img alt={stack.name} className="logos" src={stack.img} />
              </ScrollAnimation>
            ))}
          </Col>
          <Col sm={{ size: 6, order: 1 }} className="project-images">
            <img alt="Frndly Tv" src={frndly} />
            <p>this one below mobile hide</p>
            <img alt="Frndly Tv" src={frndly} />
          </Col>
        </Row>
      </div>
    );
  }
}
