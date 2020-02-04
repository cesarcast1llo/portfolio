import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'reactstrap';

const Footer = ({ data }) => (
  <footer>
    <Container className="footer-container">
      <Row>
        <Col className="left" md="4">
          <img src="../assets/images/c.png" className="logo" />
        </Col>
        <Col className="center" md="4">
          <h1>
            &copy; Cesar Castillo
            <br />
            <Link to="/2020">2020</Link>
          </h1>
        </Col>
        <Col className="right" md="4">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <h1>
            <Link to="/blog">Blog</Link>
          </h1>
          <h1>
            <Link to="/about">About</Link>
          </h1>
        </Col>
        {/* <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossOrigin="anonymous"
        ></script>
        <link
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        /> */}
      </Row>
    </Container>
  </footer>
);
export default Footer;
