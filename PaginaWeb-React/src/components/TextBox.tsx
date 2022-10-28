import { useState } from 'react'
import '../styles/Utils.css'

interface propTextBox{
  placeholder: string
  getData: Function
  textType?: string
}
function TextBox ({ placeholder, getData, textType }: propTextBox) {
  return (
    <input
      className='textbox' onChange={
      (event) => getData(event.target.value)
    } type={(textType !== undefined) ? textType : 'text'} placeholder={placeholder}
    />
  )
}
export default TextBox
