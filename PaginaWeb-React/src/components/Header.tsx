import React from 'react'
import ItemMenu from './ItemMenu'
import Browser from './Browser'
import LogoBanner from './LogoBanner'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import "../styles/Header.css"
import burger from "../assets/bx-menu.svg"

function Header () {
  const   btnMenu = document.getElementById("openMenuButtom")
  const   btnMenuCerrar = document.getElementById("closeMenuButtom")
  const   menu = document.getElementById("menu")

  const[state,setState]= useState("hide");

  const cambiarEstadoMenu = ()=>{
    if(state==="show"){
      setState("hide")
    }
    else{
      setState("show")
    }
  }
  return (
    <header >
      <button onClick={cambiarEstadoMenu} className={`openMenuButtom button${state}`} id='openMenuButtom'><img src={burger} alt="Icono menu"  /></button>
      <div className={`containerMenu menu${state}`}>
        <LogoBanner />
        <Browser />
        <Link to='/' className='buttonItemMenu simple'>
          <span>Cursos</span>
        </Link>
        <Link to='/' className='buttonItemMenu simple'>
          <span>Comunidad</span>
        </Link>
        <Link to='/' className='buttonItemMenu simple'>
          <span>Sobre nosotros</span>
        </Link>
        <Link to='/' className='buttonItemMenu simple'>
          <span>Contacto</span>
        </Link>
        <Link to='/login' className='buttonItemMenu withBackground ItemMenu'>
          <span>Iniciar Sesión</span>
        </Link>
        <button  onClick={cambiarEstadoMenu} className={`buttonItemMenu simple closeMenuButtom`}  id='closeMenuButtom'>Cerrar</button>
      </div>
    </header>
  )
}

export default Header
