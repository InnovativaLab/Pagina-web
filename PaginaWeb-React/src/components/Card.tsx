import imgDemo from '../assets/robotAzul.png'
import ItemMenu from './ItemMenu'
import '../styles/Card.css'
import Tag from './Tag'

interface propCard {
  id:Number
  img: string
  alt: string
  title: string
  text: string
  tags: string[]
}

function Card ({id, img, alt, title, text, tags }: propCard) {
  if (img === '') {
    img = imgDemo
  }
  return (
    <div className='card'>
      <img src={img} alt={alt} />
      <div className='cardContainerInfo'>
        <p className='cardtitle'>{title}</p>
        <div className='cardTagContainer'>
          {tags.map(tag => {
            return <Tag key={tag +id} type={tag} />
          })}
        </div>
        <p className='cardText'>{text}</p>
        <ItemMenu
          text='Más información'
          background
          style={3}
        />
      </div>
    </div>
  )
}
export default Card
