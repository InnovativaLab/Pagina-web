import React from 'react'
import "../styles/Footer.css"
import Redes from './Redes'
function Footer() {
  return (
    <footer>
        <div className='footerCallToAction'>
            <Redes size='small'/>
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
        
    </footer>
  )
}

export default Footer