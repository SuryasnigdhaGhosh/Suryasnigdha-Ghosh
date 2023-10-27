import "./testimonial.css"

import React from 'react'

const Testimonial = (props) => {
    return (
        <div className="testimonial">
            <div className="parent">
                <img className="img" alt="Ellipse" src={props.src} />
                <div className="testimonial-desc">
                    <div className="text-wrapper">{props.name}</div>
                    <p className="lorem-ipsum-dolor">
                        {props.comment}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
