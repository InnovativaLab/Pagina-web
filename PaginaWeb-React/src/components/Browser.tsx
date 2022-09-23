import React from 'react'
import lupa from '../assets/lupa.svg'
import '../styles/Browser.css'
import { Link } from 'react-router-dom'

function Browser () {
  const clic = () => {
    console.log('Se hizo clic')
  }
  return (
    <div className='browserContainer'>
      <input type='text' placeholder='Buscar curso' />
      <button onClick={clic}>
        <Link to='/browse'>
          <img src={lupa} alt='' />
        </Link>
      </button>
    </div>
  )
}

export default Browser
