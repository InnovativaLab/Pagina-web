import lupa from '../assets/lupa.svg'
import '../styles/Browser.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

interface propBrowser {
  closeFunction: any
}
function Browser ({ closeFunction }: propBrowser) {
  const [browse, setbrowse] = useState('')
  const readBrowse = (event:any)=>{
    setbrowse(event.target.value)
  }
  return (
    <div className='browserContainer'>
      <input type='text' placeholder='Buscar curso' onChange={readBrowse}/>
      <button onClick={closeFunction}>
        <Link to={`/browse/${browse}`}>
          <img src={lupa} alt='' />
        </Link>
      </button>
    </div>
  )
}

export default Browser
