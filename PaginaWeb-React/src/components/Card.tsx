import imgDemo from '../assets/robotAzul.png'
import { Link } from 'react-router-dom'
import ItemMenu from './ItemMenu'
import '../styles/Card.css'
import Tag from './Tag'

interface propCard {
  id: string
  img: string
  alt: string
  title: string
  text: string
  style?: string
  tags: string[]
}

function Card ({ id, img, alt, title, text, tags, style }: propCard) {
  if (img === '') {
    img = imgDemo
  }
  return (
    <div className={`card ${style}`}>
      <img src={img} alt={alt} />
      <div className='cardContainerInfo'>
        <p className='cardtitle'>{title}</p>
        <div className='cardTagContainer'>
          {tags.map(tag => {
            return <Tag key={tag + id} type={tag} />
          })}
        </div>
        <p className='cardText'>{text}</p>
        <Link to={`/course/${id}`} style={{ width: '100%' }} className='itemLink'>
          <ItemMenu
            text='Más información'
            background
            style={3}
          />
        </Link>
      </div>
    </div>
  )
}
export default Card
