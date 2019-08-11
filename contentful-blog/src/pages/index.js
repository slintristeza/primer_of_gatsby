import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    {data.allContentfulPost.edges.map(edge => {
      const author = edge.node.author
      return (
        <div key={edge.node.contentful_id}>
          <Link to={`/posts/${edge.node.slug}`}>{edge.node.title}</Link>
          {edge.node.author.avatar && (
            <img width={40} src={author.avatar.fixed.src} alt={author.name} />
          )}
          <small>{author.name}</small>
          <p>{edge.node.content.content}</p>
        </div>
      )
    })}
  </Layout>
)

export const query = graphql`
  {
    allContentfulPost {
      edges {
        node {
          contentful_id
          slug
          title
          content {
            content
          }
          author {
            name
            description {
              description
            }
            avatar {
              fixed {
                width
                height
                src
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
