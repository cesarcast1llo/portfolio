import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { tagCapital } from '../utils/utilityFunctions.js';
import { Badge, Col, Row } from 'reactstrap';
import { slugify } from '../utils/utilityFunctions.js';

// TODO before loading the card, run through tags and delete duplicates
// or else well keep getting multiple different tags on /tags page
// because of the chance of mispelling, camelcase, etc

const Post = ({ title, slug, date, body, fluid, tags }) => (
  <Row>
    <Col md="6" className="blog-image">
      <Link to={`/blog/${slug}`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
    </Col>
    <Col md="6" className="blog-post">
      <div className="blog-title">
        <Link to={`/blog/${slug}`}>{title}</Link>
      </div>
      <i className="fa fa-calendar" aria-hidden="true"></i>
      <span className="date">{date}</span>
      <div className="card-body">{body}</div>
      <div className="tags">
        {tags.map(tag => (
          <Link key={tag} to={`/tags/${slugify(tag)}`}>
            <Badge className="badge">#{tagCapital(tag)}</Badge>
          </Link>
        ))}
      </div>
    </Col>
  </Row>
);

export default Post;
