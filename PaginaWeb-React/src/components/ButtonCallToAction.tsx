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
    let styles = "buttonItemMenu "
    styles += (backgroundIn)?"withBackground":"withoutBackground"
    switch (styleIn) {
      case 0:
        styles += " simple"
        break;
      case 1:
        styles += " ButtonCallToAction"
        break;
      case 2:
        styles += " important"
        break;
      default:
        styles +=" buttonItemMenu"
        break;
    }
    return styles
  }

  return (
    <button onClick={clic} className={selectorStyle(background,style)}>
      <span>{text}</span>
    </button>
  )
}

export default ButtonCallToAction