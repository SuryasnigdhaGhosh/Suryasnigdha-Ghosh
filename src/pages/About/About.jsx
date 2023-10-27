import React from 'react'
import "./about.css"
import boy from "../../assets/2.png"

const About = () => {
    return (

        <div className="about-us">
            <div className="frame1">
                <div className="text-wrapper">Welcome to Smart Academy</div>
                <p className="about-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor</p>
                <div className="button">
                    <div className="button-wrapper">Read More</div>
                </div>
            </div>

            <div className="overlap-group">
                <img className="boy" alt="Rectangle" src={boy} />
            </div>

            <div className="frame-2">
                <div className="our-mission">Our Mission</div>
                <p className="p">
                    Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante
                    tincidunt. Sed sit amet
                </p>
                <div className='count'>

                    <div className="frame-3">
                        <div className="text-wrapper-2">10+</div>
                        <div className="text-wrapper-3">Years Experience</div>
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">29+</div>
                        <div className="text-wrapper-3">Total Course</div>
                    </div>
                    <div className="frame-3">
                        <div className="text-wrapper-2">50k+</div>
                        <div className="text-wrapper-3">Student Active</div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default About
