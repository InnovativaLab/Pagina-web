import { useNavigate } from 'react-router-dom'
import lupa from '../assets/lupa.svg'
import { useState } from 'react'
import '../styles/Browser.css'

interface propBrowser {
  closeFunction: any
}
function Browser ({ closeFunction }: propBrowser) {
  const [browse, setbrowse] = useState('a')
  const readBrowse = (event:any)=>{
    setbrowse(event.target.value)
  }
  const navigate = useNavigate()
  const goToBrowse=()=>{
    navigate(`/browse/${browse}`)
  }
  return (
    <div className='browserContainer'>
      <input type='text' placeholder='Buscar curso' onChange={readBrowse}/>
      <button onClick={goToBrowse}>
          <img src={lupa} alt='' />
      </button>
    </div>
  )
}

export default Browser
