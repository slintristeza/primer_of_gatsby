import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Title = styled.h1`
  font-size: 24px;
  color: red;
`;

const AboutPgae = () => (
  <Layout>
    <SEO title="about" />
    <Title>I"m slintristeza</Title>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPgae
