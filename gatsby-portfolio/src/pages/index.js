import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hello Great Gatsby</h1>
    {data.allStudyYaml.edges.map(edge => {
      const study = edge.node
      return (
        <div>
          <Link to={`studys/${study.slug}`}>
            {study.title} - {study.category} - {study.year}/{study.month}
          </Link>
        </div>
      )
    })}
    <Link to="/about/">Go to about page</Link>
  </Layout>
)

export const query = graphql`
  {
    allStudyYaml {
      edges {
        node {
          title
          category
          year
          month
          slug
        }
      }
    }
  }
`

export default IndexPage
