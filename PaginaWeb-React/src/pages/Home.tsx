import { userSesion } from '../services/userSesion'
import { loadCards } from '../services/cards'
import { useState, useEffect } from 'react'
import { Course, Usuario } from '../types';
import './styles/Home.css'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Home () {
  const sesion = userSesion.getInstance()
  const user:Usuario|undefined = sesion.readSesion()
  const coursesCards: JSX.Element[] = []
  const [listCourses, setListCourses] = useState(coursesCards)

  const getCourses = async () => {
    try {
      const res = await axios.post(`${API_LINK}/api/courses/get`)
      const courses: Course[] = res.data
      const coursesElements: JSX.Element[] = loadCards(courses)
      return coursesElements
    } catch (err: any) {
      console.log(err.response)
      return coursesCards
    }
  }
  useEffect(() => {
    getCourses().then((listaCursos) => {
      setListCourses(listaCursos)
    })
  }, [])

  return (
    <div className='home'>
      <p className='msgAlert'>¡Hola, {user?.Nombre}!</p>
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
