import React from 'react';
import { Row, Col } from 'reactstrap';
import Projects from './Projects';
import ScrollAnimation from 'react-animate-on-scroll';

const ProjectSection = () => {
  return (
    <Row>
      <Col className="projects">
        <div className="format">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={1}
            delay={250}
            animateOnce={true}
          >
            <div className="header">
              {/* Projects I've <br className="em_hide_mobile" />
              Worked&nbsp;On */}
              Lorem Ipsum
            </div>
          </ScrollAnimation>
          <Projects animate="fadeInLeft" />
        </div>
      </Col>
    </Row>
  );
};

export default ProjectSection;
