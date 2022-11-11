import { sendDataToFind } from '../services/services'
import { loadCards } from '../services/cards'
import { enumCategoriaCurso } from '../enum'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tag from '../components/Tag'
import { Course } from '../types'
import './styles/Busqueda.css'

function Busqueda () {
  const coursesCards: Course[] = []
  const { toFind } = useParams()
  const [num, setNum] = useState(0)
  const [listCourses, setListCourses] = useState(coursesCards)
  useEffect(() => {
    sendDataToFind(toFind).then((listaCursos) => {
      setNum(listaCursos.length)
      // console.log(listaCursos)
      setListCourses(listaCursos)
    })
  }, [toFind])
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
      </div>
    </div>
  )
}

export default Busqueda
