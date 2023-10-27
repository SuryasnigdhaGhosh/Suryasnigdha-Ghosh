import "./subscription.css"

import React from 'react'

const Subscription = () => {
    return (
        <div className="subscription">
            <div className="subscription-content">
                <div className="text-wrapper">Ignite Your Child's Potential Take the Leap with an Online Course</div>
                <div className="email">
                    <input className="email-input" type="text" placeholder="Your email addres.." />
                    <div className="buttonn">
                        <div className="button-wrapper">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription
