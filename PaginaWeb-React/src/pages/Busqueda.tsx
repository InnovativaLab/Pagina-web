import './styles/Busqueda.css'
import Card from '../components/Card'
import { enumCategoriaCurso } from '../enum'
import Tag from '../components/Tag'
import { Route, Routes, Link, useParams, Outlet, NavLink } from 'react-router-dom'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Busqueda () {
  const { toFind } = useParams()
  const sendDataToFind = async (pToFind: string) => {
    const res = await axios.post(`${API_LINK}/api/courses/get`, { "Titulo": pToFind })
    return res.data
  }
  let info = sendDataToFind((toFind!==undefined)?toFind:"")
  console.log(info)
  return (
    <div className='browse'>
      <p className='browseTitle'>3 resultados para “Arduino”</p>
      <p className='browseSubTitle'>Filtrar por categoria</p>
      <div className='tagContainer'>
        <Tag type={enumCategoriaCurso.Arduino} />
        <Tag type={enumCategoriaCurso.Electronica} />
        <Tag type={enumCategoriaCurso.Impresion3D} />
      </div>
      <div className='cardsContinaer'>
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCategoriaCurso.Arduino, enumCategoriaCurso.Tinkercad, enumCategoriaCurso.Robotica]}
        />
      </div>
      <Link to='/course'>Ir al curso</Link>
    </div>
  )
}

export default Busqueda
