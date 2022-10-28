import React from 'react'
import { enumRedSocial } from '../enum'
import imgInstagram from '../assets/svgInstagram.svg'
import imgYouTube from '../assets/svgYoutube.svg'
import imgTwitter from '../assets/svgTwitter.svg'
import imgTikTok from '../assets/svgTiktok.svg'
import '../styles/SocialNetworkButton.css'

interface propSocialNetwork{
  tipo: enumRedSocial
  link: string
}

function SocialNetworkButton ({ tipo, link }: propSocialNetwork) {
  const style = tipo
  const imgSelector = () => {
    if (tipo === enumRedSocial.YouTube) {
      return imgYouTube
    } else if (tipo === enumRedSocial.Instagram) {
      return imgInstagram
    } else if (tipo === enumRedSocial.TikTok) {
      return imgTikTok
    } else if (tipo === enumRedSocial.Twitter) {
      return imgTwitter
    }
    return ''
  }
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className={`socialNetworkButton ${style}`}>
        <img src={imgSelector()} alt={`Imagen de ${style}`} />
      </div>
    </a>
  )
}

export default SocialNetworkButton
