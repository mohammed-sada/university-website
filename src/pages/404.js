import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/Seo"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" />
      <main className="error-page">
        <div className="error-container">
          <h1>sorry, this page doesn't exist !</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </Layout>
  )
}

export default Error
