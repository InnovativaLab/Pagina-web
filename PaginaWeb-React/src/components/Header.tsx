import React from 'react'
import ItemMenu from './ItemMenu'
import Browser from './Browser'
import LogoBanner from './LogoBanner'

function Header () {
  return (
    <header>
      <div className='containerMenu'>
        <LogoBanner />
        <Browser />
        <ItemMenu
          text='Cursos'
          background={false}
          style={2}
        />
        <ItemMenu
          text='Comunidad'
          background={false}
          style={0}
        />
        <ItemMenu
          text='Sobre nosotros'
          background={false}
          style={0}
        />
        <ItemMenu
          text='Contacto'
          background={false}
          style={0}
        />
        <ItemMenu
          text='Iniciar Sesión'
          background
          style={1}
        />
      </div>
    </header>
  )
}

export default Header
