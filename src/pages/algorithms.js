import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulAlgorithims: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="algorithms" />
}

export const query = graphql`
  {
    allContentfulAlgorithims(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        lectureNumber
        url
        date(formatString: "dddd/MM/yyyy")
        createdAt(formatString: "dddd/MM/yyyy")

        desc {
          desc
        }
      }
    }
  }
`

export default ComponentName
