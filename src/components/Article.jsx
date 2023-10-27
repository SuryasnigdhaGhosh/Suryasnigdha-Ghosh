import "./article.css"
import React from 'react'

const Article = (props) => {
  return (
    <div className="article">
        <div className="article-content">
        <img className="img" alt="Rectangle" src={props.src} />
        <div className="text-wrapper"> {props.name} </div>
        <p className="article-desc">{props.desc}</p>
        <div className="button">
                <div className="button-wrapper">Read More</div>
            </div>
        </div>
      
    </div>
  )
}

export default Article
