import './navbar.css'

import React from 'react'

const Navbar = () => {
    return (
        
                <div className="frame">
                    <a className="text-wrapper">Home</a>
                    <a className="text-wrapper">About</a>
                    <a className="text-wrapper">Course</a>
                    <a className="label">Smart Academy</a>
                    <a className="button">
                        <div className="button-wrapper">Explore Course</div>
                    </a>

                </div>
        
    )
}

export default Navbar
