import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import Socials from './socials'

function header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dillon Brooks</h1>
        <h5 className="text-light">Website Developer</h5>
        <CTA/>
        <Socials/>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}

export default header