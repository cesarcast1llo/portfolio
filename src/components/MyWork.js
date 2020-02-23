import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'reactstrap';
import SkillSliders from './MyWork/SkillSliders';
import Projects from './MyWork/Projects';
import ScrollAnimation from 'react-animate-on-scroll';

const MyWork = props => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allFile(filter: { extension: { eq: "pdf" } }) {
  //       edges {
  //         node {
  //           publicURL
  //           name
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <Container className="projects-wrapper">
      {/* {data.allFile.edges.map((file, index) => {
        return (
          <li key={`pdf-${index}`}>
            <a href={file.node.publicURL} download>
              {file.node.name}
            </a>
          </li>
        );
      })} */}
      <SkillSliders />
      <Projects />

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <h1>
          <u>Technical</u>
        </h1>
        <h3>projects</h3>
        <div>frdnly</div>
        <div>html emails</div>
        <div>landing pages</div>
        <div>
          personal projects:
          <ul
            style={{
              textAlign: 'right',
              padding: 0,
              listStyleType: 'none'
            }}
          >
            <li>-portfolio running on gatsby</li>
            <li>-jcc website running on nextjs</li>
            <li>
              -100 js problems here <Link to="/blog/">blog</Link>
            </li>
            <li>-tic tac toe game running on react</li>
            <li>-todo list game running on react</li>
          </ul>
        </div>
      </ScrollAnimation>
    </Container>
  );
};

export default MyWork;
