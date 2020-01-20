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
  Badge
} from 'reactstrap';
import { slugify } from '../utils/utilityFunctions.js';

// TODO before loading the card, run through tags and delete duplicates
// or else well keep getting multiple different tags on /tags page
// because of the chance of mispelling, camelcase, etc

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
      <div key={tag}>
        <Link to={`/tags/${slugify(tag)}`}>
          <Badge color="primary" className="text-uppercase">
            {tagCapital(tag)}
          </Badge>
        </Link>
      </div>
    ))}
    <br />
    {console.log(tags)}
  </Card>
);

export default Post;
