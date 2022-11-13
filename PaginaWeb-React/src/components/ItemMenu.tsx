import { MouseEvent } from 'react'
import '../styles/ItemMenu.css'

interface propButtonCallToAction {
  text: string
  background: boolean
  style: Number
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

function ItemMenu ({ text, background, style, onClick }: propButtonCallToAction) {
  const clic = (event: MouseEvent<HTMLButtonElement>): void => {
    // event.preventDefault();
    (onClick === undefined) ? ()=>{} : onClick(event)
  }
  const selectorStyle = (backgroundIn: boolean, styleIn: Number) => {
    let styles = 'buttonItemMenu '
    styles += (backgroundIn) ? 'withBackground' : 'withoutBackground'
    switch (styleIn) {
      case 0:
        styles += ' simple'
        break
      case 1:
        styles += ' ItemMenu'
        break
      case 2:
        styles += ' important'
        break
      case 3:
        styles += ' button'
        break
      case 4:
        styles += ' button btnDelete'
        break
      default:
        styles += ' buttonItemMenu'
        break
    }
    return styles
  }

  return (
    <button onClick={clic} className={selectorStyle(background, style)}>
      <span>{text}</span>
    </button>
  )
}

export default ItemMenu
