import React from 'react';
import { Container } from 'reactstrap';
import SkillSliders from './myWork/SkillSliders';
import Projects from './myWork/Projects';
import Contact from './myWork/Contact';

const MyWork = () => {
  return (
    <Container className="projects-wrapper">
      <SkillSliders />
      <Projects />
      <Contact />
    </Container>
  );
};

export default MyWork;
