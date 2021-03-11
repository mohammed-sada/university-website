import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulAcademicWriting: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="Academic Writing" />
}

export const query = graphql`
  {
    allContentfulAcademicWriting(sort: { fields: lectureNumber, order: DESC }) {
      nodes {
        id
        lectureNumber
        url
        date(formatString: "dddd/MM/yyyy")
        updatedAt(formatString: "dddd/MM/yyyy")

        desc {
          desc
        }
      }
    }
  }
`

export default ComponentName
