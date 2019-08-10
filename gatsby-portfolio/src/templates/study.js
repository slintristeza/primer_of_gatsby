import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const StudyPage = ({ data }) => (
  <Layout>
    <SEO title="About" />
      <h1>{data.studyYaml.title}</h1>
      <div>{data.studyYaml.description}</div>
      <div>
        {data.studyYaml.category} - {data.studyYaml.year}/{data.studyYaml.month}
      </div>
      <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query($slug: String!) {
    studyYaml(slug: { eq: $slug}) {
      title
      description
      category
      year
      month
    }
  }
`

export default StudyPage
