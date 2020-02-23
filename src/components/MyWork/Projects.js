import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import VisibilitySensor from 'react-visibility-sensor';
// import 'react-circular-progressbar/dist/styles.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Projects extends Component {
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
        <Col className="projects">
          <div className="format">
            <ScrollAnimation animateIn="fadeIn" duration={2} animateOnce={true}>
              <p>Projects I've&nbsp;Built.</p>
            </ScrollAnimation>
          </div>
        </Col>
      </Row>
    );
  }
}
