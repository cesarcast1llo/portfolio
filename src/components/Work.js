import React from 'react';
import { Container } from 'reactstrap';
import SkillSliders from './Projects/SkillSliders';
import Projects from './Projects/Projects';
import Contact from './Projects/Contact';

const Work = () => {
  return (
    <Container className="projects-wrapper">
      <SkillSliders />
      <Projects />
      <Contact />
    </Container>
  );
};

export default Work;
