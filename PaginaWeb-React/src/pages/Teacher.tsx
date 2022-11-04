import './styles/Teacher.css'
import svgEstrella from '../assets/Estrella.svg'
import svgSombreroEgresado from '../assets/SombreroEgresado.svg'
import svgReservas from '../assets/Reservas.svg'
import svgUser from '../assets/User.svg'
import { useState, useEffect } from 'react'
import { getDataNumReservas,getDataNumCursos,getDataNumAlumnos,getDataCursos} from '../services/services'
import { useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import { enumPermisos } from '../enum'
import {  Course } from '../types';
import { render } from 'react-dom'

function Teacher () {
  const sesion = userSesion.getInstance()
  let coursesElements: JSX.Element[] = []
  const [numReservas, setNumReservas] = useState(0)
  const [numCourses, setNumCourses] = useState(0)
  const [numStudents, setNumStudents] = useState(0)
  const [dataCourses, setDataCourses] = useState(coursesElements)
  const navigate = useNavigate()
  window.scrollTo(0, 0)
  const loadItems = (courses: any[]) => {
    coursesElements = Object.values(courses).map(course =>
      <li className='itemCouseTop' key={course.Titulo}>
            <p>#{Object.values(courses).indexOf(course)+1} </p>
            <p>{course.Titulo}</p>
            <p>{course.Categorias}</p>
            <p>{course.NumeroDeReservas}%</p>
          </li>)
    return coursesElements
  }
  const getData = async () => {
    try {
      getDataNumReservas().then((data) => {
        setNumReservas(data.NumeroDeReservas)
        })
        getDataNumCursos().then((data) => {
          setNumCourses(data.NumeroDeCursos)
          })
          getDataNumAlumnos().then((data) => {
            setNumStudents(data.NumeroDeAlumnos)
            })
            getDataCursos().then((data) => {
              setDataCourses(loadItems(data))
              })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  useEffect(() => {
    if (!sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
      navigate('/', { replace: true })
    }
    getData()
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
            <p className='itemAnaliticNumber'>{numStudents}</p>
            <p className='itemAnaliticText'>Alumnos</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgSombreroEgresado} alt='' />
            <p className='itemAnaliticNumber'>{numCourses}</p>
            <p className='itemAnaliticText'>Cursos</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgEstrella} alt='' />
            <p className='itemAnaliticNumber'>{Math.round(numReservas/3)}</p>
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
          {dataCourses}
        </ul>
      </section>
    </div>
  )
}
export default Teacher
