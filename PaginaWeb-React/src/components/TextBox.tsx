import {useState} from 'react'
import '../styles/Utils.css'

interface propTextBox{
  placeholder: string,
  getData:Function
}
function TextBox ({ placeholder,getData}: propTextBox) {
  return (
    <input className='textbox' onChange={
      (event)=>getData(event.target.value)
    } type='text' placeholder={placeholder} />
  )
}
export default TextBox
