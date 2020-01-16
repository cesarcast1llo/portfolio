import React from "react"
import { Link, StaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Post from "../components/Post"

const Blog = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the blog page</h1>
    <Link to="/">Go back to the homepage</Link>
    <StaticQuery
      query={blogQuery}
      render={data => {
        return (
          <div>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <Post
                title={node.frontmatter.title}
                path={node.frontmatter.path}
                date={node.frontmatter.date}
                body={node.excerpt}
              />
            ))}
          </div>
        )
      }}
    />
  </Layout>
)

const blogQuery = graphql`
  query MyQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM-DD-YYYY")
            path
          }
          excerpt
        }
      }
    }
  }
`

export default Blog
