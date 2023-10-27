import "./courses.css"
import Course from "../../components/Course"
import React from 'react'

import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import c4 from "../../assets/c4.png"
import c5 from "../../assets/c5.png"
import c6 from "../../assets/c6.png"
import c7 from "../../assets/c7.png"
import c8 from "../../assets/c8.png"


const Courses = () => {
    return (

        <div className="courses">
            <div className="text-wrapper">Smart Academy offers services like</div>

            <div className="courses-grid">
                <Course src={c1} caption="Kids Science Course"/>
                <Course src={c2} caption="Kids Chef Course"/>
                <Course src={c3} caption="Kids Music Course"/>
                <Course src={c4} caption="Kids Swimming Course"/>
                <Course src={c5} caption="Kids Aerobic Course"/>
                <Course src={c6} caption="Kids Languages Course"/>
                <Course src={c7} caption="Kids Craft & Art Course"/>
                <Course src={c8} caption="Kids GO Green Course"/>
            </div>
        </div>
    )
}

export default Courses
