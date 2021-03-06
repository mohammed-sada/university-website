import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulAssembly: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="assembly" />
}

export const query = graphql`
  {
    allContentfulAssembly(sort: { fields: createdAt, order: DESC }) {
      nodes {
        id
        lectureNumber
        url
        date(formatString: "dddd/MM/yyyy")
        createdAt(formatString: "d/MM/YYYY")
        desc {
          desc
        }
      }
    }
  }
`

export default ComponentName
