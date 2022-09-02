import React from 'react'
import "../styles/LogoBanner.css"
import Logo from "../assets/logo-50x50.png"

function LogoBanner() {
  return (
    <div className='LogoBanner'>
      <img src={Logo} alt='Logo InnovativaLab'/>
      <p>InnovativaLab</p>
    </div>
  )
}

export default LogoBanner