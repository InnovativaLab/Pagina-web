import React from 'react'
import ItemMenu from './ItemMenu'
import Browser from './Browser'
import LogoBanner from './LogoBanner'
import {Link} from "react-router-dom"

function Header () {
  return (
    <header>
      <div className='containerMenu'>
        <LogoBanner />
        <Browser />
        <Link to="/"  className="buttonItemMenu simple">
          <span>Cursos</span>
        </Link>
        <Link to="/"  className="buttonItemMenu simple">
          <span>Comunidad</span>
        </Link>
        <Link to="/"  className="buttonItemMenu simple">
          <span>Sobre nosotros</span>
        </Link>
        <Link to="/"  className="buttonItemMenu simple">
          <span>Contacto</span>
        </Link>
        <Link to="/login"  className="buttonItemMenu withBackground ItemMenu">
          <span>Iniciar Sesión</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
