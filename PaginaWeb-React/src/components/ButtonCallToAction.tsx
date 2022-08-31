import React from 'react'
import "../styles/ButtonCallToAction.css"
interface propButtonCallToAction{
    text:string
}

function ButtonCallToAction({text}:propButtonCallToAction) {
  const clic=()=>{
    console.log("Se hizo clic")
  }

  return (
    <button onClick={clic} className='ButtonCallToAction'>
      <span>{text}</span>
    </button>
  )
}

export default ButtonCallToAction