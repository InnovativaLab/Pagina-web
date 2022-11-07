import { userSesion } from '../services/userSesion'
import { useState, useEffect } from 'react'
import { Usuario } from '../types'
import './styles/Home.css'
import { getCoursesOfUserJSX } from '../services/services'
import { enumPermisos } from '../enum'
import { useNavigate } from 'react-router-dom'

function Home () {
  const navigate = useNavigate()
  const sesion = userSesion.getInstance()
  const coursesCards: JSX.Element[] = []
  const user: Usuario | undefined = sesion.readSesion()
  const [listCourses, setListCourses] = useState(coursesCards)

  window.scrollTo(0, 0)
  useEffect(() => {
    getCoursesOfUserJSX(user?.NombreDeUsuario).then((listaCursos) => {
      setListCourses(listaCursos)
    })
    if (!sesion.isAuthorized(enumPermisos.AccesoVistaCursos)) {
      navigate('/', { replace: true })
    }
  }, [])

  return (
    <div className='home'>
      <p className='msgAlert'>¡Hola, {user?.Nombre}! ¿Qué vas a aprender hoy?</p>
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
