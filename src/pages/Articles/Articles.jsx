import "./articles.css"
import Article from "../../components/Article"
import a1 from "../../assets/a1.png"
import a2 from "../../assets/a2.png"
import a3 from "../../assets/a3.png"

import React from 'react'

const Articles = () => {
  return (
    <div className="articles">
      <div className="text-wrapper">Articles And Insights</div>
      <div className="article-grid">
        <Article src={a1} name="The Benefits of Enrolling Kids in Online Courses" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Article src={a2} name="Unlock Your Child's Potential with Online Courses for Kids" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <Article src={a3} name="Engage and Inspire The Power of Online Courses for Kids" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/> 
      </div>

      
    </div>
  )
}

export default Articles
