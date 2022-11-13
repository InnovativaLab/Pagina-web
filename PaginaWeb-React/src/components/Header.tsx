import { Link, useNavigate, useLocation } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import { HashLink } from 'react-router-hash-link'
import { useState, useEffect } from 'react'
import burger from '../assets/bx-menu.svg'
import LogoBanner from './LogoBanner'
import Browser from './Browser'
import '../styles/Header.css'
import { enumPermisos } from '../enum'

function Header () {
  const location = useLocation()
  const navigate = useNavigate()
  const sesion = userSesion.getInstance()
  const [state, setState] = useState('hide')
  const [button, setButton] = useState(<></>)
  const [btnPublish, setBtnPublish] = useState(<></>)
  const [itemsMenu, setItemsMenu] = useState(<></>)

  const cambiarEstadoMenu = () => {
    if (state === 'show') {
      setState('hide')
    } else {
      setState('show')
    }
  }
  const cerrarSesion = () => {
    cambiarEstadoMenu()
    const isLogged = sesion.isLogged()
    if (isLogged) {
      sesion.closeSesion()
      const button = generateButton(isLogged)
      setButton(button)
      navigate('/', { replace: true })
    }
  }
  const generateButton = (state: Boolean) => {
    if (!state) {
      return (
        <Link to='/login' onClick={cambiarEstadoMenu} className='buttonItemMenu withBackground ItemMenu'>
          <span>Iniciar Sesión</span>
        </Link>
      )
    }
    return (
      <span onClick={cerrarSesion} className='buttonItemMenu withBackground ItemMenu'>
        <span>Cerrar Sesión</span>
      </span>
    )
  }
  const generateButtonPublish = () => {
    const userDataSesion = sesion.readSesion()

    if (sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
      if (userDataSesion?.RolNombre === 'Docente') {
        return (
          <>
            <HashLink to='/teacher' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
              <span>Panel</span>
            </HashLink>
            <HashLink to='/publish' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
              <span>Publicar</span>
            </HashLink>
          </>
        )
      }
    }
    return <></>
  }
  const generateItemsMenu = (state: Boolean) => {
    if (!state) {
      return (
        <>
          <HashLink to='/#Nosotros' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Sobre nosotros</span>
          </HashLink>
          <HashLink to='/#Comunidad' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Comunidad</span>
          </HashLink>
          <a href='mailto:innovativalab@gmail.com' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Contacto</span>
          </a>
        </>
      )
    }
    return (
      <></>
    )
  }
  useEffect(() => {
    const isLogged = sesion.isLogged()
    //console.info('¿Esta logueado?:', isLogged)
    const botones = generateButton(isLogged)
    setButton(botones)
    const itemsDelMenu = generateItemsMenu(isLogged)
    setItemsMenu(itemsDelMenu)
    const buttonPublish = generateButtonPublish()
    setBtnPublish(buttonPublish)
  }, [location])

  return (
    <>
      <header>
        <button onClick={cambiarEstadoMenu} className={`openMenuButtom button${state}`} id='openMenuButtom'><img src={burger} alt='Icono menu' /></button>
        <div className={`containerMenu menu${state}`}>
          <HashLink to='/#' onClick={cambiarEstadoMenu} className='noLink'>
            <LogoBanner />
          </HashLink>
          <Browser closeFunction={cambiarEstadoMenu} />
          {itemsMenu}
          <HashLink to='/#Cursos' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Cursos</span>
          </HashLink>
          <HashLink to='/home' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Inicio</span>
          </HashLink>
          {btnPublish}
          {button}
          <button onClick={cambiarEstadoMenu} className='buttonItemMenu simple closeMenuButtom' id='closeMenuButtom'>Cerrar</button>
        </div>
      </header>
      <p className='headerSpace' />
    </>

  )
}

export default Header
