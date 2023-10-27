import React from 'react'
import './hero.css'
import Navbar from '../../components/Navbar'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="bg-img">
        <Navbar />
        <div className='container'>
          <div className='heading'>
            Achieve your future With Smart Academy
          </div>
          <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique sem ut lacinia pellentesque. Donec in nulla faucibus, tincidunt velit vel, ultricies dolor.</p>
          <div className="button">
            <div className="button-wrapper">Explore Course</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
