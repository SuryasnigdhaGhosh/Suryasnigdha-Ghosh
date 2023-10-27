import "./course.css"
import React from 'react'

const Course = (props) => {
  return (
    <div className="course">
      <img className="img" alt="Rectangle" src={props.src} />
      <div className="caption">{props.caption}</div>
    </div>
  )
}

export default Course
