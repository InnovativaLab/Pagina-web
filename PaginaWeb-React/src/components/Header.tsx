import { userSesion } from '../services/userSesion'
import { HashLink } from 'react-router-hash-link'
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react'
import burger from '../assets/bx-menu.svg'
import { Link, useNavigate } from 'react-router-dom'
import LogoBanner from './LogoBanner'
import Browser from './Browser'
import '../styles/Header.css'

function Header () {
  const location = useLocation();
  const navigate = useNavigate()
  const sesion = userSesion.getInstance()
  const [state, setState] = useState('hide')
  const [button, setButton] = useState(<></>)

  const cambiarEstadoMenu = () => {
    if (state === 'show') {
      setState('hide')
    } else {
      setState('show')
    }
  }
  const cerrarSesion = () => {
    cambiarEstadoMenu()
    let isLogged = sesion.isLogged()
    if(isLogged){
      console.log('000000clic');
      sesion.closeSesion()
      let button = generateButton(isLogged)
      setButton(button)
      navigate('/', { replace: false })
    }
  }
  const generateButton = (state:Boolean)=>{
    if(!state){
      return <Link to='/login' onClick={cambiarEstadoMenu} className='buttonItemMenu withBackground ItemMenu'>
          <span>Iniciar Sesión</span>
        </Link>
    }
    return <span onClick={cerrarSesion} className='buttonItemMenu withBackground ItemMenu'>
          <span>Cerrar Sesión</span>
        </span>
  }
  useEffect(() => {
    let isLogged = sesion.isLogged()
    console.log(isLogged)
    let button = generateButton(isLogged)
    setButton(button)
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
          <HashLink to='/#Nosotros' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Sobre nosotros</span>
          </HashLink>
          <HashLink to='/#Comunidad' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Comunidad</span>
          </HashLink>
          <HashLink to='/#Cursos' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Cursos</span>
          </HashLink>
          <a href='mailto:innovativalab@gmail.com' onClick={cambiarEstadoMenu} className='buttonItemMenu simple'>
            <span>Contacto</span>
          </a>
          {button}
          <button onClick={cambiarEstadoMenu} className='buttonItemMenu simple closeMenuButtom' id='closeMenuButtom'>Cerrar</button>
        </div>
      </header>
      <p className='headerSpace' />
    </>

  )
}

export default Header
