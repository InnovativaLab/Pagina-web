import './styles/Busqueda.css'
import { Link } from 'react-router-dom'

function Busqueda () {
  return (
    <div className='busqueda'>
      <h1 style={{"color":"#fff"}}>Busqueda</h1>
      <Link to='/course'>Ir al curso</Link>
    </div>
  )
}

export default Busqueda
