import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';

const Footer = ({ props }) => (
  <Container className="footer">
    <Row>
      <Col>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'left',
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
          }}
        >
          <h1 style={{ margin: 0 }}>&copy;2020</h1>
        </div>
        <div
          style={{
            display: 'inline-block',
            textAlign: 'right',
            maxWidth: 960,
            padding: `1.45rem 1.0875rem`
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            ></Link>
            <Link
              to="/blog"
              style={{
                color: `white`,
                textDecoration: `none`
              }}
            >
              Blog
            </Link>
          </h1>
          pass in prop to highlight where a use is, same as footer
        </div>
        <script
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
        />
      </Col>
    </Row>
  </Container>
);
export default Footer;
