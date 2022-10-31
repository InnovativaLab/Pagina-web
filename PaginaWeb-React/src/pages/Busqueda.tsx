import './styles/Busqueda.css'
import Card from '../components/Card'
import { enumCategoriaCurso } from '../enum'
import Tag from '../components/Tag'
import { Route, Routes, Link, useParams, Outlet, NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState ,useEffect} from 'react';
import { loadCards } from '../services/cards'
import { Course } from '../types'

const API_LINK = 'http://localhost:3001'

function Busqueda () {
  const coursesCards: Course[] = []
  const { toFind } = useParams()
  const [num,setNum] =useState(0)
  const [listCourses,setListCourses] =useState(coursesCards)
  const sendDataToFind = async () => {
    const res = await axios.post(`${API_LINK}/api/courses/get`, { "Titulo": toFind })
   // setNum(res.data)
    return res.data
  }
  useEffect(() => {
    sendDataToFind().then((listaCursos) => {
      setNum(listaCursos.length)
      console.log(listaCursos)
      setListCourses(listaCursos)
    })
  }, [])
  //let info = sendDataToFind((toFind!==undefined)?toFind:"")
 // console.log(info)
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
      <Link to='/course'>Ir al curso</Link>
    </div>
  )
}

export default Busqueda
