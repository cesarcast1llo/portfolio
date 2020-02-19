import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Col } from 'reactstrap';
import SkillSliders from '../components/SkillSliders';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
  state = {};

  componentWillUnmount() {}

  componentDidMount() {}

  render() {
    return (
      <Col className="project-wrapper">
        <SkillSliders />
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h1>
            <u>Technical</u>
          </h1>
          <h3>projects</h3>
          <div>frdnly</div>
          <div>html emails</div>
          <div>landing pages</div>
          <div>
            personal projects:
            <ul
              style={{
                textAlign: 'right',
                padding: 0,
                listStyleType: 'none'
              }}
            >
              <li>-portfolio running on gatsby</li>
              <li>-jcc website running on nextjs</li>
              <li>
                -100 js problems here <Link to="/blog/">blog</Link>
              </li>
              <li>-tic tac toe game running on react</li>
              <li>-todo list game running on react</li>
            </ul>
          </div>
        </ScrollAnimation>
      </Col>
    );
  }
}

export default Projects;
