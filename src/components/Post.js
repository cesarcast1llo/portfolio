import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge,
  Row,
  Col
} from 'reactstrap';
import { slugify } from '../utils/utilityFunctions.js';

const Post = ({ title, date, slug, body, fluid, tags }) => {
  // or {props.title}, {props.date} etc
  return (
    <Card>
      <Link to={`/${slug}`}>
        <Img className="card-img-top" fluid={fluid} />
      </Link>
      <CardBody style={{ padding: 0 }}>
        <br />
        <CardTitle>
          <Link to={`/${slug}`}>{title}</Link>
        </CardTitle>
        <CardSubtitle>{date}</CardSubtitle>
      </CardBody>
      <CardText>{body}</CardText>
      <Row>
        <Col sm="6">
          <Link to={`/${slug}`}>Read Moreeee</Link>
        </Col>
        <Col sm="6">
          <div style={{ textAlign: 'right' }}>
            {tags.map(tag => (
              <Link key={tag} to={`/tags/${slugify(tag)}/`}>
                <Badge color="danger">{tag}</Badge>{' '}
              </Link>
            ))}
          </div>
        </Col>
      </Row>
      <br />
    </Card>
  );
};

export default Post;
