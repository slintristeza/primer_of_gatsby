import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPgae = () => (
  <Layout>
    <SEO title="about" />
    <h1>I"m slintristeza</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPgae
