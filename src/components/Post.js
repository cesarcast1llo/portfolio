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

const Post = ({ title, slug, date, body, fluid, tags }) => (
  <Card>
    <Link to={`/${slug}`}>
      <Img className="card-image-top" fluid={fluid} />
    </Link>
    <CardBody style={{ padding: 0 }}>
      <br />
      <CardTitle>
        <Link to={`/${slug}`}>{title}</Link>
      </CardTitle>
      <CardSubtitle>{date}</CardSubtitle>
    </CardBody>
    <CardText>{body}</CardText>
    {tags.map(tag => (
      <Link to={`/tags/${slugify(tag)}`}>
        <Badge color="primary" className="text-uppercase">
          {tag}
        </Badge>
      </Link>
    ))}
    <br />
  </Card>
);

export default Post;
