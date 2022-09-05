import React from 'react'
import lupa from '../assets/lupa.svg'
import '../styles/Browser.css'

function Browser () {
  const clic = () => {
    console.log('Se hizo clic')
  }
  return (
    <div className='browserContainer'>
      <input type='text' placeholder='Buscar curso' />
      <button onClick={clic}>
        <img src={lupa} alt='' />
      </button>
    </div>
  )
}

export default Browser
