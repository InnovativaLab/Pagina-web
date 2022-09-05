import React from 'react'
import "../styles/Utils.css"

interface propSubtitle{
    msg:string
}
function Subtitle({msg}:propSubtitle) {
  return (
    <p className='subtitle'>{msg}</p>
  )
}
export default Subtitle