import { userSesion } from '../services/userSesion'
import { useState, useEffect } from 'react'
import { Usuario } from '../types'
import './styles/Home.css'
import { getCourses } from '../services/services'

function Home () {
  const sesion = userSesion.getInstance()
  const user: Usuario | undefined = sesion.readSesion()
  const coursesCards: JSX.Element[] = []
  const [listCourses, setListCourses] = useState(coursesCards)

  useEffect(() => {
    getCourses().then((listaCursos) => {
      setListCourses(listaCursos)
    })
    if (sesion.isLogged()) {

    }
  }, [])

  return (
    <div className='home'>
      <p className='msgAlert'>¡Hola, {user?.Nombre}!¿Qué vas a aprender hoy?</p>
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
