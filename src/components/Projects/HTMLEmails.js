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
        <Link to="/html-emails">
          <Row>
            <Col md={{ size: 12 }} className="project-description">
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={450}
                animateOnce={true}
              >
                <h2>HTML Emails</h2>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={550}
                animateOnce={true}
              >
                <p>
                  Developed and validated 100+ responsive HTML emails using HTML4, Salesforce or React.js. All emails have been proofed and checked using HTML validators. Email responsiveness was proofed using Litmus or Email on Acid on 70+ email clients and devices before&nbsp;delivery. Used HTML validation to keep consitency using HTML best&nbsp;practices.
                </p>
                <Link to="/html-emails">
                  <Button className="email-btn">EXAMPLES</Button>
                </Link>
              </ScrollAnimation>
              <ScrollAnimation
                className="animate"
                animateIn="fadeIn"
                duration={1}
                delay={650}
                animateOnce={true}
              >
                <div class='badge-wrapper'>
                  <img class="hubspot-badge" alt='Hubspot Email Marketing Certified' src='https://hubspot-academy.s3.amazonaws.com/prod/tracks/user-badges/dfe76a1582aa4db5ba4bda28f23e4c75-1607721216453.png' />
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
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          </Link>
        </div>
      </ScrollAnimation>
    );
  }
}
