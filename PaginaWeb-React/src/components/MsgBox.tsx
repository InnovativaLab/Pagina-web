import { useState, useEffect } from 'react'
import '../styles/MsgBox.css'

interface propMsgBox {
  text: string
}

function MsgBox ({ text }: propMsgBox) {
  const [msg, setMsg] = useState(<></>)

  const generateMessage = () => {
    if (text !== '') {
      return <div className='msgBox'>{text}</div>
    }
    return <></>
  }
  useEffect(() => {
    setMsg(generateMessage())
  }, [])
  return (
    <>
      {msg}
    </>
  )
}

export default MsgBox
