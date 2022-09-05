import React from 'react'
import "../styles/Title.css"

interface propTitle{
    msg:string
}
function Title({msg}:propTitle) {
  return (
    <h1 className='title'>{msg}</h1>
  )
}
export default Title