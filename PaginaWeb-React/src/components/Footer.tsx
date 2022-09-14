import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Footer.css'
import Redes from './Redes'
function Footer () {
  return (
    <footer>
      <div className='footerCallToAction'>
        <Redes size='small' />
        <div className='footerLinksContainer'>
          <div className='footerLinksColumn'>
            <p className='footerLinksTitle'>Column One</p>
            <ul className='footerLinksList'>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
          </div>
          <div className='footerLinksColumn'>
            <p className='footerLinksTitle'>Column One</p>
            <ul className='footerLinksList'>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
          </div>
          <div className='footerLinksColumn'>
            <p className='footerLinksTitle'>Column One</p>
            <ul className='footerLinksList'>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
              <li><a href='#'>Link</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footerInformation'>
        <p>©2022, All right reserved.</p>
        <div className='footerInformationLinks'>
          <Link to="/privacity" >Politicas de privacidad</Link>
          <Link to="/terms" >Terminos de servicio</Link>
          <Link to="/cookies" >Uso de Cookies</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
