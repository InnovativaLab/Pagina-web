import { sendDataToFind, getRemoveCourses } from '../services/services';
import { loadCards, loadRemoveCards } from '../services/cards';
import { useParams,useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import { useState, useEffect } from 'react'
import { enumPermisos } from '../enum'
import { Course } from '../types'
import './styles/Busqueda.css'

function Busqueda () {
  const coursesCards: Course[] = []
  const { toFind } = useParams()
  const [num, setNum] = useState(0)
  const [listCourses, setListCourses] = useState(coursesCards)
  const sesion = userSesion.getInstance()
  const navigate = useNavigate()
  const [removeCourse, setRemoveCourse] = useState(coursesCards)

  useEffect(() => {
    sendDataToFind(toFind).then((listaCursos) => {
      setNum(listaCursos.length)
      setListCourses(listaCursos)
    })
  }, [toFind])

  useEffect(() => {
    if (!sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
      navigate('/', { replace: true })
    } else {
      const userDataSesion = sesion.readSesion()
      if (userDataSesion?.RolNombre === 'Docente') {
        getRemoveCourses().then((curso) => {
          setRemoveCourse(curso)
          console.log(curso);
        })
      }
    }
  }, [])
  /* <p className='browseSubTitle'>Filtrar por categoria</p>
      <div className='tagContainer'>
        <Tag type={enumCategoriaCurso.Arduino} />
        <Tag type={enumCategoriaCurso.Electronica} />
        <Tag type={enumCategoriaCurso.Impresion3D} />
      </div> */
  return (
    <div className='browse'>
      <p className='browseTitle'>{`${num} resultados encontrados para "${toFind}"`}</p>

      <div className='cardsContinaer'>
        {loadCards(listCourses)}
        {loadRemoveCards(removeCourse)}
      </div>
    </div>
  )
}

export default Busqueda
