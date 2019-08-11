import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const post = props => {
  const post = props.data.contentfulPost
  const author = post.author
  const avatar = author.avatar
  const contentHtml = post.content.childMarkdownRemark.html
  return (
    <Layout>
      <h1>{post.title}</h1>
      {avatar && (
        <img
          width={40} height={40 / avatar.fixed.width * avatar.fixed.height}
          src={avatar.fixed.src} alt={author.name}
        />
      )}
      <small>
        {author.name} | {post.publishedAt}
      </small>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export default post

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      publishedAt(formatString: "YYYY?MM?DD")
      content {
        childMarkdownRemark {
          html
        }
      }
      author {
        name
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
`
