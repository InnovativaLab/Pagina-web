import React, { useState } from 'react'
import ItemMenu from './ItemMenu'
import Browser from './Browser'
import LogoBanner from './LogoBanner'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import burger from '../assets/bx-menu.svg'
import { HashLink } from 'react-router-hash-link'

function Header () {
  const btnMenu = document.getElementById('openMenuButtom')
  const btnMenuCerrar = document.getElementById('closeMenuButtom')
  const menu = document.getElementById('menu')

  const [state, setState] = useState('hide')

  const cambiarEstadoMenu = () => {
    if (state === 'show') {
      setState('hide')
    } else {
      setState('show')
    }
  }
  return (
    <>
    <header>
      <button onClick={cambiarEstadoMenu} className={`openMenuButtom button${state}`} id='openMenuButtom'><img src={burger} alt='Icono menu' /></button>
      <div className={`containerMenu menu${state}`}>
        <Link className='noLink' onClick={cambiarEstadoMenu} to='/'>
          <LogoBanner />
        </Link>
        <Browser closeFunction={cambiarEstadoMenu} />
        <HashLink to='/#Comunidad' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
          <span>Comunidad</span>
        </HashLink>
        <HashLink to='#Cursos' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
          <span>Cursos</span>
        </HashLink>
        <Link to='/' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
          <span>Sobre nosotros</span>
        </Link>
        <a href='mailto:innovativalab@gmail.com' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
          <span>Contacto</span>
        </a>
        <Link to='/login' onClick={cambiarEstadoMenu} className='buttonItemMenu withBackground ItemMenu'>
          <span>Iniciar Sesión</span>
        </Link>
        <button onClick={cambiarEstadoMenu} className='buttonItemMenu simple closeMenuButtom' id='closeMenuButtom'>Cerrar</button>
      </div>
    </header>
      <p className='headerSpace'></p>
    </>
    
  )
}

export default Header
