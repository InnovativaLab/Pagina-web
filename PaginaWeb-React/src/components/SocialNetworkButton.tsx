import React from 'react'
import { enumSocialNetwork } from '../enums/enumData'
import imgInstagram from '../assets/svgInstagram.svg'
import imgYouTube from '../assets/svgYoutube.svg'
import imgTwitter from '../assets/svgTwitter.svg'
import imgTikTok from '../assets/svgTiktok.svg'
import '../styles/SocialNetworkButton.css'

interface propSocialNetwork{
  tipo: enumSocialNetwork
  link: string
}

function SocialNetworkButton ({ tipo, link }: propSocialNetwork) {
  const style = tipo
  const imgSelector = () => {
    if (tipo === enumSocialNetwork.YouTube) {
      return imgYouTube
    } else if (tipo === enumSocialNetwork.Instagram) {
      return imgInstagram
    } else if (tipo === enumSocialNetwork.TikTok) {
      return imgTikTok
    } else if (tipo === enumSocialNetwork.Twitter) {
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
