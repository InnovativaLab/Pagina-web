import React from 'react'
import ItemMenu from '../components/ItemMenu'
import { Link } from 'react-router-dom'
import svgError404 from '../assets/Error404.svg'
import './styles/Error404.css'

function Error404 () {
  return (
    <div className='error404Container'>
      <img src={svgError404} alt='' />
      <p>Error 404</p>
      <Link to='/'>
        <ItemMenu
          text='Ir al inicio'
          background
          style={3}
        />
      </Link>
    </div>
  )
}

export default Error404
