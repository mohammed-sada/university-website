import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulStatistics: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="Statistics" />
}

export const query = graphql`
  {
    allContentfulStatistics(sort: { fields: createdAt, order: DESC }) {
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
