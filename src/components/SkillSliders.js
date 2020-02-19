import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';
import ScrollAnimation from 'react-animate-on-scroll';

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
              // delay={1000}
              animateOnce={true}
            >
              <p>What I can do.</p>

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
                                duration={4}
                                counterClockwise
                                value={isVisible ? skill.number : 0}
                                text={`${skill.number}%`}
                                styles={buildStyles({
                                  pathTransitionDuration: 3
                                })}
                              />
                            </>
                          );
                        }}
                      </VisibilitySensor>
                    </Col>
                  ))}

                <br />
                <div className="show-more">
                  <button className="btn btn-primary" onClick={this.showMore}>
                    {this.state.expanded ? (
                      <span>Show Less</span>
                    ) : (
                      <span>Show More</span>
                    )}
                  </button>
                </div>
              </Row>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    );
  }
}
