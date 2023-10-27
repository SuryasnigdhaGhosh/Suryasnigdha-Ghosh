import React from 'react'
import "./service.css"

const Service = (props) => {
    return (
        <div className='box'>
            <div className='box-content'>
                <img className="img" src={props.src} />
                <div className='title'>{props.title}</div>
                <p className="box-desc">{props.desc}</p>
            </div>
        </div>
    )
}

export default Service
