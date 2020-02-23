import React from 'react';
import { Row, Col } from 'reactstrap';

import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {
  return (
    <Row>
      <Col className="projects">
        <div className="format">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={250}
            animateOnce={true}
          >
            <p>Projects</p>
          </ScrollAnimation>
        </div>
      </Col>
    </Row>
  );
};

export default Projects;
