import React from 'react';
import { Row, Col } from 'reactstrap';
import FrndlyTv from './FrndlyTv';
import LiftSite from './LiftSite';
import HTMLEmails from './HTMLEmails';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
  return (
    <>
      <Row>
        <Col className="odd">
          <Row>
            <Col className="header">
              <ScrollAnimation
                animateIn="fadeIn"
                duration={1}
                delay={350}
                animateOnce={true}
              >
                <div className="header">Projects I've Worked&nbsp;On.</div>
              </ScrollAnimation>
            </Col>
          </Row>
          <div className="format">
            <FrndlyTv />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="projects">
          <div className="format">
            <LiftSite />
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="odd">
          <div className="format">
            <HTMLEmails />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Projects;
