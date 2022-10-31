import React, { HtmlHTMLAttributes, MouseEventHandler,MouseEvent } from 'react'
import '../styles/ItemMenu.css'
import { Link } from 'react-router-dom'
import {CartItemProps} from '../types'

interface propButtonCallToAction {
  text: string
  background: boolean
  style: Number
  onClick?:(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>)=> void
}

function ItemMenu ({ text, background, style, onClick }: propButtonCallToAction) {
  // console.log(onClick)
  const clic = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    console.log(clic);
    (onClick === undefined) ? console.log('Se hizo clic') : onClick(event)
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
      default:
        styles += ' buttonItemMenu'
        break
    }
    return styles
  }

  return (
    <button onClick={clic } className={selectorStyle(background, style)}>
      <span>{text}</span>
    </button>
  )
}

export default ItemMenu
