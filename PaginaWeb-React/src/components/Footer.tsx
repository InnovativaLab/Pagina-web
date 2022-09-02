import React from 'react'
import "../styles/Footer.css"

function Footer() {
  return (
    <footer>
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
    </footer>
  )
}

export default Footer