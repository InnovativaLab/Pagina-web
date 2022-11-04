import './styles/Teacher.css'
import svgEstrella from '../assets/Estrella.svg'
import svgSombreroEgresado from '../assets/SombreroEgresado.svg'
import svgReservas from '../assets/Reservas.svg'
import svgUser from '../assets/User.svg'
import { useState, useEffect } from 'react'
import { getDataNumReservas } from '../services/services'
import { useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import { enumPermisos } from '../enum'
import MsgBox from '../components/MsgBox'

function Teacher () {
  const sesion = userSesion.getInstance()
  const [numReservas, setNumReservas] = useState(0)
  const [pws, setPws] = useState('')
  const [errorMsg, setMsg] = useState(<></>)
  const navigate = useNavigate()
  window.scrollTo(0, 0)

  const getData = async () => {
    try {
      getDataNumReservas().then((data) => {
        setNumReservas(data.NumeroDeReservas)
        })
    } catch (err: any) {
      setMsg(<MsgBox text={err.response} />)
      console.log(err.response)
    }
  }
  useEffect(() => {
    getData()
    if (!sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
      navigate('/', { replace: true })
    }
  }, [])
  return (
    <div className='section'>
      <section className='analiticSection'>
        <p className='msgAlert'>Introducción a Arduino</p>
        <div className='itemContainer'>
          <div className='itemAnalitic'>
            <img src={svgReservas} alt='Imagen de reservas' />
            <p className='itemAnaliticNumber'>{numReservas}</p>
            <p className='itemAnaliticText'>Reservas</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgUser} alt='' />
            <p className='itemAnaliticNumber'>128</p>
            <p className='itemAnaliticText'>Alumnos</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgSombreroEgresado} alt='' />
            <p className='itemAnaliticNumber'>2</p>
            <p className='itemAnaliticText'>Cursos</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgEstrella} alt='' />
            <p className='itemAnaliticNumber'>15</p>
            <p className='itemAnaliticText'>Calificaciones</p>
          </div>
        </div>
      </section>

      <div className='grafic' />
      <section className='analiticSection'>
        <p className='msgAlert'>Cursos top</p>
        <ul className='listCousesTop'>
          <li className='itemCouseTop titleCouseTop'>
            <p>#</p>
            <p>Nombre</p>
            <p>Categoria</p>
            <p>Reservas</p>
          </li>
          <li className='itemCouseTop'>
            <p>#1</p>
            <p>Arduino desde cero para principantes</p>
            <p>Arduino, Robotica, Simuladores</p>
            <p>48%</p>
          </li>
          <li className='itemCouseTop'>
            <p>#2</p>
            <p>Arduino desde cero para principantes</p>
            <p>Arduino, Robotica, Simuladores</p>
            <p>48%</p>
          </li>
          <li className='itemCouseTop'>
            <p>#3</p>
            <p>Arduino desde cero para principantes</p>
            <p>Arduino, Robotica, Simuladores</p>
            <p>48%</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
export default Teacher
