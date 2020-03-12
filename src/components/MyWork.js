import React from 'react';
import { Container } from 'reactstrap';
import SkillSliders from './myWork/SkillSliders';
import Projects from './myWork/Projects';
import Resume from './myWork/Resume';
import ScrollAnimation from 'react-animate-on-scroll';
// import Data from '../pages/data.json';

const myWork = props => {
  return (
    <Container className="projects-wrapper">
      <SkillSliders />
      <Projects />
      <Resume />
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <h1>
          <u>Technical</u>
        </h1>
        <h3>projects</h3>
        <div>frdnly</div>
        <div>html emails</div>
        <div>landing pages</div>
      </ScrollAnimation>
    </Container>
  );
};

export default myWork;
