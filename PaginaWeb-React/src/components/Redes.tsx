import React from 'react'
import Logo from '../assets/Logo.png'
import LogoInstagram from '../assets/Instagram.svg'
import LogoYouTube from '../assets/Youtube.svg'
import LogoTwitter from '../assets/Twitter.svg'
import LogoLinkedin from '../assets/Linkedin.svg'
import '../styles/Redes.css'
interface propRedes{
  size: string
}
function Redes ({ size }: propRedes) {
  return (
    <div className='redesTitleGrande'>
      <img className={(size === 'small') ? 'imgChica' : 'imgGrande'} src={Logo} alt='Logo de InnovativaLab' />
      <p className={`footerLinksTitle ${(size === 'small') ? 'redesTitleChico' : 'redesTitleGrande'}`}>InnovativaLab</p>
      <div>
        <a href='https://www.instagram.com/innovativalab/' target='_blank' rel='noreferrer'><img src={LogoInstagram} alt='Logo de Instagram' /></a>
        <a href='https://twitter.com/InnovativaLab' target='_blank' rel='noreferrer'><img src={LogoTwitter} alt='Logo de Twitter' /></a>
        <a href='https://www.youtube.com/c/InnovativaLab' target='_blank' rel='noreferrer'><img src={LogoYouTube} alt='Logo de YouTube' /></a>
        <a href='https://www.linkedin.com/company/innovativalab/' target='_blank' rel='noreferrer'><img src={LogoLinkedin} alt='Logo de Linkedin' /></a>
      </div>
    </div>
  )
}

export default Redes
