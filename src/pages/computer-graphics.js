import React from "react"
import { graphql } from "gatsby"
import Subject from "../components/Subject"

const ComponentName = ({ data }) => {
  const {
    allContentfulComputerGraphics: { nodes: lectures },
  } = data
  return <Subject lectures={lectures} name="جرافيك حاسوب" />
}

export const query = graphql`
  {
    allContentfulComputerGraphics(sort: { fields: createdAt, order: DESC }) {
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
