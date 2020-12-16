import React from 'react';
import { Row, Col } from 'reactstrap';
import FrndlyTv from './FrndlyTv';
import LiftSite from './LiftSite';
import HTMLEmails from './HTMLEmails';

const Projects = () => {
  return (
    <>
      <Row>
        <Col className="odd">
          <HTMLEmails />
        </Col>
      </Row>
      <Row>
        <Col className="projects">
          <LiftSite />
        </Col>
      </Row>
      <Row>
        <Col className="odd">
          <FrndlyTv />
        </Col>
      </Row>
    </>
  );
};

export default Projects;
