import React from 'react'
import "../styles/ButtonCallToAction.css"

interface propButtonCallToAction{
    text:string,
    background:boolean,
    style:Number
}

function ButtonCallToAction({text,background,style}:propButtonCallToAction) {
  const clic=()=>{
    console.log("Se hizo clic")
  }
  const selectorStyle=(backgroundIn:boolean, styleIn:Number)=>{
    let styles
    styles = (backgroundIn)?"withBackground ":"withoutBackground "
    return styles + 'ButtonCallToAction'
  }

  return (
    <button onClick={clic} className={selectorStyle(background,style)}>
      <span>{text}</span>
    </button>
  )
}

export default ButtonCallToAction