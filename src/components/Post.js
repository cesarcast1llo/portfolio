import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { tagCapital } from '../utils/utilityFunctions.js';
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
  Col,
  Row
} from 'reactstrap';
import { slugify } from '../utils/utilityFunctions.js';

// TODO before loading the card, run through tags and delete duplicates
// or else well keep getting multiple different tags on /tags page
// because of the chance of mispelling, camelcase, etc

const Post = ({ title, slug, date, body, fluid, tags }) => (
  <Row>
    <Col md="5" className="blog-image">
      <Link to={`/blog/${slug}`}>
        <Img className="card-image-top" fluid={fluid} />
      </Link>
    </Col>
    <Col md="7" className="blog-post">
      <Col className="blog-body">
        <CardBody className="card-body">
          <Link to={`/blog/${slug}`}>
            <CardTitle className="cardtitle">{title}</CardTitle>
          </Link>
          <CardSubtitle className="post-date">clock icon- {date}</CardSubtitle>
          <CardText className="cardtext">{body}</CardText>{' '}
          <div className="tags">
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${slugify(tag)}`}>
                <Badge className="badge">{tagCapital(tag)}</Badge>
              </Link>
            ))}
          </div>
        </CardBody>
      </Col>
    </Col>
  </Row>
);

export default Post;
