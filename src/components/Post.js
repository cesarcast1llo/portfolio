import React from "react"
import { Link } from "gatsby"
import { Card, CardTitle, CardText, CardSubtitle, CardBody } from "reactstrap"

const Post = ({ title, date, path, body }) => {
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={path}>{title}</Link>
        </CardTitle>
        <CardSubtitle>{date}</CardSubtitle>
      </CardBody>
      <CardText>{body}</CardText>
      <Link to={path}>Read more</Link>
    </Card>
  )
}

export default Post
