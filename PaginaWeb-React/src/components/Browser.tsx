import React from 'react'
import lupa from '../assets/lupa.svg'
import '../styles/Browser.css'
import { Link } from 'react-router-dom'

interface propBrowser{
  closeFunction: any
}
function Browser ({closeFunction}:propBrowser) {
  return (
    <div className='browserContainer'>
      <input type='text' placeholder='Buscar curso' />
      <button onClick={closeFunction}>
        <Link to='/browse'>
          <img src={lupa} alt='' />
        </Link>
      </button>
    </div>
  )
}

export default Browser
