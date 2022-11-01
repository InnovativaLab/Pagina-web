import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import Redes from './Redes'
import { HashLink } from 'react-router-hash-link'
function Footer () {
  return (
    <footer>
      <div className='footerCallToAction'>
        <Redes size='small' />
        <div className='footerLinksContainer'>
          <div className='footerLinksColumn'>
            <p className='footerLinksTitle'>Personas</p>
            <ul className='footerLinksList'>
              <li><HashLink to="/#Nosotros">Nosotros</HashLink></li>
              <li><HashLink to="/#Comunidad">Comunidad</HashLink></li>
              <li><HashLink to="/#Staff">Equipo</HashLink></li>
            </ul>
          </div>
          <div className='footerLinksColumn'>
            <p className='footerLinksTitle'>Column One</p>
            <ul className='footerLinksList'>
              <li><HashLink to="/#Cursos">Cursos</HashLink></li>
              <li><a href='mailto:innovativalab@gmail.com'>Contacto</a></li>
              <li><Link to="/browse/arduino">Arduino</Link></li>
            </ul>
          </div>
          <div className='footerLinksColumn'>
            <p className='footerLinksTitle'>Column One</p>
            <ul className='footerLinksList'>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/signin">Registrarse</Link></li>
              <li><Link to="/teacher">Ser profesor</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footerInformation'>
        <p>©2022, All right reserved.</p>
        <div className='footerInformationLinks'>
          <Link to='/privacity'>Politicas de privacidad</Link>
          <Link to='/terms'>Terminos de servicio</Link>
          <Link to='/cookies'>Uso de Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
