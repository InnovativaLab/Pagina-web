import ItemMenu from '../components/ItemMenu'
import imgCheck from '../assets/check.svg'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Tag from '../components/Tag'
import { Course } from '../types'
import './styles/Inicio.css'
import './styles/Curso.css'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Curso () {
  const { id } = useParams()
  const [course, setCourse] = useState({} as Course)
  const getCourse = async () => {
    try {
      const res = await axios.get(`${API_LINK}/api/courses/${id}`)
      const curso : Course = res.data
      return curso
    } catch (err: any) {
      console.log(err.response)
      return {} as Course
    }
  }
  useEffect(() => {
    getCourse().then((curso) => {
      setCourse(curso)
      console.log(curso)
    })
  }, [])
  return (
    <main className='cursoMain'>
      <section className='infoCurso'>
        <section className='courseInfo'>
        <div className='courseInfoContainerTitle'>
          <p className='courseInfoTitle'>{course.Titulo}</p>
        </div>
        <div className='courseInfoData'>
          <p>{course.Descripcion}</p>
          <p><span className='bold'>Categorias</span></p>
          <div className='courseInfoTagContainer'>
            <Tag key={course.Categoria+id} type={course.Categoria} />
            <Tag key={course.Subcategoria+id} type={course.Subcategoria} />
          </div>
          <p><span className='bold'>Reservado por:</span>{` ${100} estudiantes.`}</p>
          <p><span className='bold'>Ultima actualización: </span>{`${course.Subcategoria}`}</p>
          <p><span className='bold'>Idioma:</span>{` ${"Español"}`}</p>
        </div>
      </section>
      <section className='resultados'>
        <div className='resultadosContainerTitle'>
          <p className='resultadosTitle'>Lo que aprenderas</p>
        </div>
        <ul>
          <li><img src={imgCheck} alt='icono de check'/>En este cursos aprenderas los conceptos basicos de Arduino.</li>
          <li><img src={imgCheck} alt='icono de check'/>Electronica basica.</li>
          <li><img src={imgCheck} alt='icono de check'/>Simuladores de robotica.</li>
          <li><img src={imgCheck} alt='icono de check'/>A crear tu propio robot.</li>
        </ul>
      </section>
      </section>
      <section className='infoDeCompra'>
            <img src={course.ImagenDePortada} alt={`Foto del curso`}/>
            <div >
              <div  className='infoDeCompraData'>
                <div className='infoDeCompraPrecios'>
                  <p className='infoDeCompraPrecio'>{`$${course.PrecioEnPesos}`}</p>
                  <p className='infoDeCompraPrecioSinDescuento'>{`$${ course.PrecioEnPesos*2}`}</p>
                </div>
                <p>50% de descuento</p>
                <ItemMenu
                  text='Reservar curso'
                  background
                  style={3}/>
                <p className='textCenter'>Garantia de 30 dias</p>
              </div>
            </div>
      </section>
    </main>
  )
}

export default Curso
