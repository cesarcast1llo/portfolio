import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import SEO from '../components/seo';

const IndexPage = ({ data }) => (
  // <header></header>
  <>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="upperoverlay"></div>
    <Container className="index-page">
      <Row>
        <Col md="12" className="intro">
          <Link to="/blog/">Developing Blog</Link>
          <br />
          <Img
            alt="Me, Myself, and I"
            className="me"
            fixed={data.placeholderImage.childImageSharp.fixed}
          />
          <h2>
            Hello, my name is
            <br className="em_hide_desktop" style={{ display: 'none' }} /> Joe
            Diiiiiirt
          </h2>
          <div className="info">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            <div className="contact">
              <a href="/" target="_blank">
                <img
                  alt="Email Icon"
                  className="email"
                  src="https://img.Icons8.com/small/90/000000/filled-message.png"
                />
              </a>
              <a href="/" target="_blank">
                <img
                  className="github"
                  alt="Github Icon"
                  src="https://img.icons8.com/ios-glyphs/120/000000/github.png"
                />
              </a>
              <a href="/" target="_blank">
                <img
                  alt="LinkedIn icon"
                  className="lnkdin"
                  src="https://img.icons8.com/ios-filled/100/000000/linkedin.png"
                />
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="goals">
          <h1>ADD QUOTES HERE FROM FAV BOOKS</h1>
        </Col>
      </Row>
    </Container>
  </>
);

export default IndexPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "code2.jpeg" }) {
      childImageSharp {
        fixed(width: 160) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
`;
