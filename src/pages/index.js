import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';
import Img from 'gatsby-image';
import PageWrapper from '../components/PageWrapper.js';

const IndexPage = ({ data }) => (
  <PageWrapper
    pageTitle="Home"
    pageKeywords={[`gatsby`, `application`, `react`]}
    bgColor="#3d3e3d"
    backgroundURL="url(https://previews.123rf.com/images/foxaon/foxaon1203/foxaon120300037/12751727-blue-source-code-background.jpg)"
  >
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
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </p>
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
          <h1>How it all started..</h1>
          <h2>1992-2017</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
          </p>
          <h2>2017-Present</h2>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
          </p>
        </Col>
      </Row>

      <Row>
        <Col md="12" className="goals">
          <h1>ADD QUOTES HERE FROM FAV BOOKS</h1>
        </Col>
      </Row>
    </Container>
  </PageWrapper>
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
