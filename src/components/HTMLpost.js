import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Col } from 'reactstrap';

const HTMLPost = ({ title, slug, body, fluid }) => (
  <>
    <Col md="4" className="html-email">
      <Link to={`/emails/${slug}`}>
        <Img className="card-image-top html-image" fluid={fluid} />
        <div className="html-title">
          {title}
        </div>
        {/* <div className="card-body">{body}</div> */}
      </Link>
    </Col>
  </>
);

export default HTMLPost;
