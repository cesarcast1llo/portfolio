import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Col, Row } from 'reactstrap';

const Post = ({ title, slug, body, fluid }) => (
  <Row>
    <Col md="6" className="blog-image">
      <Link to={`/html/${slug}`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
    </Col>
    <Col md="6" className="blog-post">
      <div className="blog-title">
        <Link to={`/emails/${slug}`}>{title}</Link>
      </div>
      <div className="card-body">{body}</div>
    </Col>
  </Row>
);

export default Post;
