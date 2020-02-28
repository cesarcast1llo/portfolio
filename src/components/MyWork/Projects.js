import React from 'react';
import { Row, Col } from 'reactstrap';
import PortfolioModule from '../MyWork/PortfolioModule';
import ScrollAnimation from 'react-animate-on-scroll';
import Carousel from './Carousel';
// import Data from '../../pages/data.json';

const Projects = () => {
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
            <Carousel />
            <div className="intro">Projects</div>
          </ScrollAnimation>
          <PortfolioModule animate="fadeInLeft" />
        </div>
      </Col>
    </Row>
  );
};

export default Projects;
