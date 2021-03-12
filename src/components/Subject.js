import dayjs from "dayjs"
import React from "react"
import Layout from "./Layout"

const Subject = ({ lectures, name }) => {
  return (
    <Layout>
      <h1 style={{ marginTop: "7rem" }} className="section-title">
        {name}
      </h1>
      <div className="underline"></div>
      <div className="section-center blogs-center">
        {lectures.map(lecture => {
          const { id, lectureNumber, url, desc, date, createdAt } = lecture

          return (
            <div key={id} className="blog">
              <article>
                <div className="blog-card">
                  <h4>{lectureNumber}:رقم المحاضرة</h4>
                  <p className="desc">{(desc !== null && desc.desc) || ""}</p>
                  <div className="blog-footer">
                    <p
                      className={`${
                        createdAt !==
                          dayjs(new Date()).format("dddd/MM/YYYY") && "hideNew"
                      }`}
                    >
                      new
                    </p>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn"
                    >
                      رابط المحاضرة
                    </a>
                    <p>{date || createdAt}</p>
                  </div>
                </div>
              </article>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default Subject
