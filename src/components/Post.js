import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import {
  Card,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  Badge
} from 'reactstrap';
import { slugify } from '../utils/utilityFunctions.js';

const Post = ({ title, date, path, body, fluid, tags }) => {
  // or {props.title}, {props.date} etc
  return (
    <Card>
      <Link to={path}>
        <Img className="card-img-top" fluid={fluid} />
      </Link>
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>{date}</CardSubtitle>
      </CardBody>
      <CardText>{body}</CardText>
      <div style={{ display: 'inline-block' }}>
        {tags.map(tag => (
          <Link key={tag + 'tag'} to={`/tags/${slugify(tag)}/`}>
            <Badge color="primary">{tag}</Badge>{' '}
          </Link>
        ))}
      </div>
      <Link to={path}>Read more</Link>
    </Card>
  );
};

export default Post;
