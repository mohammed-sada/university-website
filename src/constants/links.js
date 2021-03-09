import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 2,
    text: "algorithims",
    url: "/algorithims/",
  },
  {
    id: 3,
    text: "assembly",
    url: "/assembly/",
  },
  {
    id: 4,
    text: "requirements eng.",
    url: "/requirements-engineering/",
  },
  {
    id: 5,
    text: "statistics",
    url: "/statistics/",
  },
  {
    id: 6,
    text: "academic writing",
    url: "/academic-writing/",
  },
  { id: 7, text: "عقيدة", url: "/عقيدة/" },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
