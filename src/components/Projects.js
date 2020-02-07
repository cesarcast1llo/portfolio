import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';

class Projects extends Component {
  state = {};

  componentWillUnmount() {
    //  if (this.intervalID === null) return;
    //  clearInterval(this.intervalID);
  }
  componentDidMount() {
    //  this.intervalID = setInterval(() => {s
    //    this.setState(state => {
    //      return {s
    //        ...state,
    //        networkSpeed: getRandomNumber(),
    //        cpu: getRandomNumber(),
    //        memory: getRandomNumber()
    //      };
    //    });
    //  }, 3000);
  }
  render() {
    // console.log(this.getData());
    return (
      <Row>
        <Col className="project-wrapper">
          <div className="projects-intro">
            <h1>pd doc</h1>
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
          </div>
        </Col>
      </Row>
    );
  }
}

export default Projects;
