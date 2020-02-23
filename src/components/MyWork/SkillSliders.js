import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';
import ScrollAnimation from 'react-animate-on-scroll';
// shorten
import github from '../../assets/images/logos/github.png';
import heroku from '../../assets/images/logos/heroku.png';
import aws from '../../assets/images/logos/aws.png';
import sf from '../../assets/images/logos/salesforce.png';
import psd from '../../assets/images/logos/photoshop.png';
import inD from '../../assets/images/logos/indesign.png';
import xd from '../../assets/images/logos/xd.png';
import sketch from '../../assets/images/logos/sketch.svg';
// find a way to shorten this down ^^^

export default class SkillSliders extends Component {
  constructor() {
    super();

    this.state = {
      skills: [
        { name: 'HTML', number: 90 },
        { name: '(S)CSS', number: 90 },
        { name: 'Javascript', number: 85 },
        { name: 'React.js', number: 80 },
        { name: 'Emails', number: 90 },
        { name: 'Next.js', number: 80 },
        { name: 'Node.js', number: 75 },
        { name: 'Wordpress', number: 80 }
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
              duration={2}
              delay={250}
              animateOnce={true}
            >
              <div className="intro">What I can do.</div>
            </ScrollAnimation>

            <ScrollAnimation
              animateIn="fadeIn"
              duration={1}
              delay={750}
              animateOnce={true}
            >
              <Row>
                {this.state.skills
                  .slice(0, this.state.itemsToShow)
                  .map((skill, i) => (
                    <Col xs="12" sm="6" md="3" className="skillName" key={i}>
                      <VisibilitySensor intervalDelay={4000}>
                        {({ isVisible }) => {
                          return (
                            <>
                              <p>{skill.name}</p>
                              <CircularProgressbar
                                duration={3}
                                counterClockwise
                                value={isVisible ? skill.number : 0}
                                text={`${skill.number}%`}
                                styles={buildStyles({
                                  pathTransitionDuration: 2.5
                                })}
                              />
                            </>
                          );
                        }}
                      </VisibilitySensor>
                    </Col>
                  ))}

                <Col md="12">
                  <div className="show-more">
                    <button className="btn btn-primary" onClick={this.showMore}>
                      {this.state.expanded ? (
                        <span>Show Less</span>
                      ) : (
                        <span>Show More</span>
                      )}
                    </button>
                  </div>
                </Col>
              </Row>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="flipInX"
              duration={1.5}
              delay={3500}
              animateOnce={true}
            >
              <Row>
                <Col md="5" className="other-tools">
                  Other Tools:
                </Col>
                <Col md="7" className="other-tools-icon">
                  <img alt="Adobe Photoshop" className="psd" src={psd} />
                  <img alt="Adobe InDesign" className="inD" src={inD} />
                  <img alt="Sketch" className="sketch" src={sketch} />
                  <img alt="Adobe XD" className="xd" src={xd} />
                  <br className="em_hide_mobile" />
                  <img alt="Github" className="github" src={github} />
                  <img alt="Heroku" className="heroku" src={heroku} />
                  <img alt="Amazon Web Services" className="aws" src={aws} />
                  <img alt="Salesforce" className="sf" src={sf} />
                </Col>
              </Row>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    );
  }
}
