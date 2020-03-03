import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import html from '../../assets/images/gatsby-astronaut.png';
import c from '../../assets/images/c.png';

// import ScrollAnimation from 'react-animate-on-scroll';

const images = [
  {
    key: 1,
    src: html,
    altText: 'Slide 1',
    caption: 'json to pull files'
  },
  {
    key: 2,
    src: c,
    altText: 'Slide 555',
    caption: 'captcha for securioty to pull files'
  },
  {
    key: 3,
    src: html,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Projects = props => {
  const ss = {
    reviews: [
      {
        author: 'Lorem Ipsum'
      },
      {
        author: '222Lorem Ipsum'
      }
    ]
  };
  const frndlylogo = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "code.jpg" }
      ) {
        childImageSharp {
          fixed(width: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="project-layout">
      <Row>
        <Col xs="6" className="project">
          {/* <img
            alt={images.altText}
            key={data.allDataJson.edges.node.image}
            src={images.client}
          /> */}
          {/* {ss.slice(0, 2).map((name, i) => ( */}
          <p>{ss.reviews.quote}</p>

          <ul>
            <li>next.js</li>
            <li>node</li>
            <li>express</li>
            <li>dta,json</li>
          </ul>
          <Button color="danger" onClick={toggle}>
            {ss.name}
          </Button>
        </Col>
        <Col xs="6">
          <Img
            fixed={frndlylogo.file.childImageSharp.fixed}
            alt="_"
            className="project-image"
          />
          <Modal isOpen={modal} toggle={toggle} className="project-modal">
            <ModalHeader toggle={toggle}></ModalHeader>
            <ModalBody>
              <UncontrolledCarousel
                interval={false}
                indicators={false}
                items={images}
              />
            </ModalBody>
          </Modal>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
