import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulRequirementsEngineering: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="requirements Engineering" />
}

export const query = graphql`
  {
    allContentfulRequirementsEngineering(
      sort: { fields: createdAt, order: DESC }
    ) {
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
