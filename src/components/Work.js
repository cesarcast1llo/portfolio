import React from 'react';
import { Container } from 'reactstrap';
import SkillSliders from './Projects/SkillSliders';
import Projects from './Projects/Projects';

const Work = () => {
  return (
    <Container className="projects-wrapper">
      <SkillSliders />
      <Projects />
    </Container>
  );
};

export default Work;
