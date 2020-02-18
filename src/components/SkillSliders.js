import React, { Component } from 'react';
// import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren
} from 'react-circular-progressbar';
import VisibilitySensor from 'react-visibility-sensor';
import 'react-circular-progressbar/dist/styles.css';

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
        <Col className="skill-sliders">
          <p>Skills</p>
          <VisibilitySensor>
            {({ isVisible }) => {
              const react = isVisible ? 80 : 0;
              const next = isVisible ? 75 : 0;
              const html = isVisible ? 95 : 0;
              const js = isVisible ? 85 : 0;
              return (
                <Row>
                  <Col xs="6" md="3" className="skillName">
                    <p>Emails</p>
                    <CircularProgressbar value={html} text={`${html}%`} />
                  </Col>
                  <Col xs="6" md="3" className="skillName">
                    <p>Javascript</p>
                    <CircularProgressbar value={js} text={`${js}%`} />
                  </Col>
                  <Col xs="6" md="3" className="skillName">
                    <p>React.js</p>
                    <CircularProgressbar value={react} text={`${react}%`} />
                  </Col>
                  <Col xs="6" md="3" className="skillName">
                    <p>Next.js</p>
                    <CircularProgressbar value={next} text={`${next}%`} />
                  </Col>
                </Row>
              );
            }}
          </VisibilitySensor>
        </Col>
      </Row>
    );
  }
}

export default SkillSliders;
