import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    file(relativePath: { eq: "students.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const IndexPage = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="section-center">
        <Image fluid={fluid} className="hero-img" />
        <h1 className="section-title">
          al azhar university gaza <br />
          software engineering & IT students
        </h1>
        <div className="underline"></div>
      </div>
    </Layout>
  )
}

export default IndexPage
