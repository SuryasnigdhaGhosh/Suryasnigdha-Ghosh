import React from 'react'
import "./services.css"
import Service from "../../components/Service"
import icon1 from "../../assets/Icon.png"
import icon2 from "../../assets/Icon2.png"
import icon3 from "../../assets/Icon3.png"
import icon4 from "../../assets/Icon4.png"


const Services = () => {
    return (
        <div className='services'>
            <div className="text-wrapper">Smart Academy offers services like</div>

            <div className='services-box'>
                <Service src={icon1} title="Teachers Profesional" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Service src={icon2} title="Online Course" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Service src={icon3} title="Certificate Course" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Service src={icon4} title="Best Value" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>

            <div className="button">
                <div className="button-wrapper">Read More</div>
            </div>

        </div>
    )
}

export default Services
