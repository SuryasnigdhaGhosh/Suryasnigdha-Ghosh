import "./testimonials.css"
import Testimonial from "../../components/Testimonial"
import React from 'react'
import t1 from "../../assets/t1.png"
import t2 from "../../assets/t2.png"
import t3 from "../../assets/t3.png"
import t4 from "../../assets/t4.png"
import t5 from "../../assets/t5.png"


const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="text-wrapper">Our Testimonial at Smart Academy</div>
      <div className="testimonials-grid">
        <Testimonial src={t1} name="Park Jee" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique."/>
        <Testimonial src={t2} name="Jasmine Vandervort" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique."/>
        <Testimonial src={t3} name="Park Jee" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique."/>
        <Testimonial src={t4} name="Husna mawadus" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique."/>
        <Testimonial src={t5} name="Jacob Kozey" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique."/>
      </div>
    </div>
  )
}

export default Testimonials
