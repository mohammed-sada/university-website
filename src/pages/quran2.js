import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulQuran2: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="قرآن 2" />
}

export const query = graphql`
  {
    allContentfulQuran2(sort: { fields: createdAt, order: DESC }) {
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
