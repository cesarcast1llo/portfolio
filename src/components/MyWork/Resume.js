import React from 'react';
import { Link } from 'gatsby';
import { Row, Col } from 'reactstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import pdf from '../../assets/documents/cesarcastillo_resume.pdf';
// import doc from '../../assets/documents/cesarcastillo_resume.docx';

const Resume = () => {
  return (
    <ScrollAnimation
      animateIn="fadeInLeft"
      duration={1}
      delay={250}
      animateOnce={true}
    >
      {' '}
      <Row>
        <Col className="projects">
          <div className="format">
            <div className="resume">Resume with justive!</div> -100 js problems
            here <Link to="/blog/">blog</Link>
            <br />
            <a href={pdf} download>
              PDF
            </a>
            {/* <a href={doc} download>
              Doc
            </a> */}
          </div>
        </Col>
      </Row>
    </ScrollAnimation>
  );
};

export default Resume;
