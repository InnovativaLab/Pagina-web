import React from 'react'
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
          <a href='#'>Politicas de privacidad</a>
          <a href='#'>Terminos de servicio</a>
          <a href='#'>Uso de Cookies</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
