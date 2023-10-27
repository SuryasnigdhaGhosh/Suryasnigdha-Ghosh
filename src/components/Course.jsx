import "./course.css"
import React from 'react'

const Course = (props) => {
  return (
    <div className="course">
      <img className="img" alt="Rectangle" src={props.src} />
      <a className="caption">{props.caption}</a>
    </div>
  )
}

export default Course
