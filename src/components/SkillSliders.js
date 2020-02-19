import React, { Component } from 'react';
// import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import { CircularProgressbar } from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SkillSliders extends Component {
  constructor() {
    super();

    this.state = {
      skills: [
        { name: 'HTML', number: 90 },
        { name: '(S)CSS', number: 90 },
        { name: 'Javascript', number: 80 },
        { name: 'React.js', number: 80 },
        { name: 'Emails', number: 80 },
        { name: 'Next.js', number: 80 },
        { name: 'Wordpress', number: 80 },
        { name: '____', number: 80 }
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
            <p>What I can do.</p>

            <Row>
              {this.state.skills
                .slice(0, this.state.itemsToShow)
                .map((skill, i) => (
                  <Col xs="12" sm="6" md="3" className="skillName" key={i}>
                    <ReactCSSTransitionGroup
                      className="gauges"
                      transitionName="fade"
                      transitionEnterTimeout={500}
                      transitionLeaveTimeout={500}
                    >
                      <VisibilitySensor>
                        {({ isVisible }) => {
                          return (
                            <>
                              <p>{skill.name}</p>
                              <CircularProgressbar
                                value={isVisible ? skill.number : 0}
                                text={`${skill.number}%`}
                              />
                            </>
                          );
                        }}
                      </VisibilitySensor>
                    </ReactCSSTransitionGroup>
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
          </div>
        </Col>
      </Row>
    );
  }
}

export default SkillSliders;
