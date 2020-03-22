import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
// shorten
import github from '../../assets/images/logos/github.png';
import heroku from '../../assets/images/logos/heroku.png';
import aws from '../../assets/images/logos/aws.png';
import sf from '../../assets/images/logos/salesforce.png';
import psd from '../../assets/images/logos/photoshop.png';
import inD from '../../assets/images/logos/indesign.png';
import sketch from '../../assets/images/logos/sketch.png';

import html from '../../assets/images/logos/html.png';
import css from '../../assets/images/logos/css3.png';
import javascript from '../../assets/images/logos/javascript.png';
import react from '../../assets/images/logos/react.png';
import emails from '../../assets/images/logos/htmlemail.png';
import next from '../../assets/images/logos/nextjs.png';
import node from '../../assets/images/logos/nodejs.png';
import gatsby from '../../assets/images/logos/gatsby.png';
import wordpress from '../../assets/images/logos/wordpress.png';

// find a way to shorten this down ^^^

export default class SkillSliders extends Component {
  constructor() {
    super();

    this.state = {
      skills: [
        { name: 'HTML', img: html, number: 250 },
        { name: '(S)CSS', img: css, number: 450 },
        { name: 'Javascript', img: javascript, number: 650 },
        { name: 'React-js', img: react, number: 850 },
        { name: 'Emails', img: emails, number: 250 },
        { name: 'Next-js', img: next, number: 450 },
        { name: 'Gatsby', img: gatsby, number: 650 },
        { name: 'Node-js', img: node, number: 850 }
      ],
      tools: [
        { name: 'Github', src: github, number: 1200 },
        { name: 'Wordpress', src: wordpress, number: 1350 },
        { name: 'Heroku', src: heroku, number: 1500 },
        { name: 'AWS', src: aws, number: 1650 },
        { name: 'Salesforce', src: sf, number: 1800 },
        { name: 'Photoshop', src: psd, number: 1950 },
        { name: 'InDesign', src: inD, number: 2100 },
        { name: 'Sketch', src: sketch, number: 2250 }
      ],
      itemsToShow: 4,
      expanded: false
    };

    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    this.state.itemsToShow === 4
      ? this.setState({ itemsToShow: this.state.skills.length, expanded: true })
      : this.setState({ itemsToShow: 4, expanded: false });
  }

  render() {
    return (
      <Row>
        <Col className="skill-sliders">
          <div className="format">
            <ScrollAnimation
              animateIn="fadeIn"
              duration={1.5}
              delay={100}
              animateOnce={true}
            >
              <div className="intro">
                What I <br className="em_hide_mobile" />
                Work&nbsp;With.
              </div>
            </ScrollAnimation>

            <Row className="justify-content-center">
              {this.state.skills
                .slice(0, this.state.itemsToShow)
                .map((skill, i) => (
                  <Col xs="6" sm="3" md="3" className="skillName" key={i}>
                    <ScrollAnimation
                      animateIn="fadeIn"
                      duration={2.5}
                      delay={skill.number}
                      animateOnce={true}
                    >
                      <p>{skill.name}</p>
                      <img
                        alt={skill.name}
                        className={skill.name}
                        src={skill.img}
                      />
                    </ScrollAnimation>
                  </Col>
                ))}

              <ScrollAnimation
                animateIn="fadeIn"
                duration={1.5}
                delay={1000}
                animateOnce={true}
              >
                <Col md="12" className="show-more">
                  <button className="btn btn-primary" onClick={this.showMore}>
                    {this.state.expanded ? (
                      <span>Show Less</span>
                    ) : (
                      <span>Show More</span>
                    )}
                  </button>
                </Col>
              </ScrollAnimation>
            </Row>

            <ScrollAnimation
              animateIn="fadeIn"
              duration={1.5}
              delay={1800}
              animateOnce={true}
            >
              <Row>
                <Col md="5" className="other-tools">
                  Other Development&nbsp;Tools:
                </Col>
                <Col md="7" className="other-tools-icon">
                  {this.state.tools.map((tool, i) => {
                    return i === 3 ? (
                      <div key={i} style={{ display: 'inline' }}>
                        <ScrollAnimation
                          className="animate"
                          animateIn="fadeIn"
                          duration={1.5}
                          delay={tool.number}
                          animateOnce={true}
                        >
                          <img
                            alt={tool.name}
                            className={tool.name}
                            src={tool.src}
                          />
                        </ScrollAnimation>

                        <br className="em_hide_mobile" />
                      </div>
                    ) : (
                      <ScrollAnimation
                        className="animate"
                        animateIn="fadeIn"
                        duration={1.5}
                        delay={tool.number}
                        animateOnce={true}
                        key={i}
                      >
                        <img
                          alt={tool.name}
                          className={tool.name}
                          src={tool.src}
                        />
                      </ScrollAnimation>
                    );
                  })}
                </Col>
              </Row>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    );
  }
}
