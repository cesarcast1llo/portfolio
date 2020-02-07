import React, { Component } from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';

class SkillSliders extends Component {
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
          <div className="projects-intro"></div>
        </Col>
      </Row>
    );
  }
}

export default SkillSliders;
