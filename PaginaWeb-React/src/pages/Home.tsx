import './styles/Home.css'
import Card from '../components/Card'
import { enumCategoriaCurso } from '../enum'
import axios from 'axios'
import { Course } from '../types'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
const API_LINK = 'http://localhost:3001'

function Home () {
  const coursesCards: JSX.Element[] = []
  const [listCourses, setListCourses] = useState(coursesCards)
  const cookies = new Cookies()
  const getCourses = async () => {
    console.log('Cargando Cursos...')
    console.log(cookies.get('user'))

    try {
      const res = await axios.get(`${API_LINK}/api/courses`)
      const courses: Course[] = res.data
      let coursesElements: JSX.Element[] = []
      coursesElements = Object.values(courses).map(course =>
        <Card
          img=''
          alt='robot'
          title={course.Titulo}
          text={course.Descripcion}
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />)
      return coursesElements
    } catch (err: any) {
      console.log(err.response)
      return coursesCards
    }
  }
  useEffect(() => {
    getCourses().then((listaCursos) => {
      setListCourses(listaCursos)
      console.log(coursesCards)
    })
  }, [])
  return (
    <div className='home'>
      <p className='msgAlert'>¡Hola, Franco!</p>
      <p className='homeSubtitulo'>Tus cursos</p>
      <div className='cardsContinaer'>
        {
          listCourses
        }
      </div>
    </div>
  )
}
export default Home
