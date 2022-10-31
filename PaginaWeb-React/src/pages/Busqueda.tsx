import { loadCards } from '../services/cards'
import { enumCategoriaCurso } from '../enum'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Tag from '../components/Tag'
import { Course } from '../types'
import './styles/Busqueda.css'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Busqueda () {
  const coursesCards: Course[] = []
  const { toFind } = useParams()
  const [num, setNum] = useState(0)
  const [listCourses, setListCourses] = useState(coursesCards)
  const sendDataToFind = async () => {
    const res = await axios.post(`${API_LINK}/api/courses/get`, { Titulo: toFind })
    return res.data
  }
  useEffect(() => {
    sendDataToFind().then((listaCursos) => {
      setNum(listaCursos.length)
      console.log(listaCursos)
      setListCourses(listaCursos)
    })
  }, [toFind])

  return (
    <div className='browse'>
      <p className='browseTitle'>{`${num} resultados encontrados para "${toFind}"`}</p>
      <p className='browseSubTitle'>Filtrar por categoria</p>
      <div className='tagContainer'>
        <Tag type={enumCategoriaCurso.Arduino} />
        <Tag type={enumCategoriaCurso.Electronica} />
        <Tag type={enumCategoriaCurso.Impresion3D} />
      </div>
      <div className='cardsContinaer'>
        {loadCards(listCourses)}
      </div>
    </div>
  )
}

export default Busqueda
