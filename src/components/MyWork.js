import React from 'react';
import { Container } from 'reactstrap';
import SkillSliders from '../components/myWork/SkillSliders';
import Projects from '../components/myWork/Projects';
import Contact from './myWork/Contact';
import ScrollAnimation from 'react-animate-on-scroll';
// import Data from '../pages/data.json';

const myWork = props => {
  return (
    <Container className="projects-wrapper">
      <SkillSliders />
      <Projects />
      <Contact />
    </Container>
  );
};

export default myWork;
