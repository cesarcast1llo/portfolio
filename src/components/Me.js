import React from 'react';
import { Link, useStaticQuery } from 'gatsby';
import { Row, Col } from 'reactstrap';
import Img from 'gatsby-image';

const Me = props => {
  const data = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "gatsby-astronaut.png" }
      ) {
        childImageSharp {
          fixed(width: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <Row>
      <Col className="index-page-wrapper">
        <div className="intro">
          <Link to="/blog/">Developing Blog</Link>

          <div className="typed-wrapper">
            {/* <Typed
          className="info"
          strings={['Hello', 'Hola', 'Bonjour', 'Olá', 'Gluten Tag']}
          typeSpeed={40}
          backSpeed={50}
          attr="placeholder"
          loop
        >
          <input type="text" />
        </Typed> */}
          </div>
          <br />
          <Img
            fixed={data.file.childImageSharp.fixed}
            alt="CC"
            className="logo-img"
          />
          <div className="contact">
            contact me:&nbsp;
            <a href="/" target="_blank">
              <img
                alt="Email Icon"
                className="email"
                src="https://img.Icons8.com/small/90/3d3e3d/filled-message.png"
              />
            </a>
            <a href="/" target="_blank">
              <img
                className="github"
                alt="Github Icon"
                src="https://img.icons8.com/ios-glyphs/120/3d3e3d/github.png"
              />
            </a>
            <a href="/" target="_blank">
              <img
                alt="LinkedIn icon"
                className="lnkdin"
                src="https://img.icons8.com/ios-filled/100/3d3e3d/linkedin.png"
              />
            </a>
          </div>
          <div className="info">
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Me;
