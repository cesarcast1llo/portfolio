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
          <Img
            alt="Me, Myself, and I"
            className="me"
            fixed={data.placeholderImage.childImageSharp.fixed}
          />
          <h2>
            Hello, my name is
            <br />
            Cesar Castillo
          </h2>
          <h2>
            Contact: <i className="fa fa-github" aria-hidden="true"></i>{' '}
            <img
              className="github"
              alt="Github Icon"
              src="https://img.icons8.com/ios-glyphs/120/000000/github.png"
            />
          </h2>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="goals">
          <h1>ADD QUOTES HERE FROM FAV BOOKS</h1>
        </Col>
      </Row>
    </Container>

    <Link to="/blog/">Developing Blog</Link>
  </>
);

export default IndexPage;

export const query = graphql`
  query {
    placeholderImage: file(relativePath: { eq: "code2.jpeg" }) {
      childImageSharp {
        fixed(width: 250) {
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
