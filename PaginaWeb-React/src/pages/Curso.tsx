import './styles/Curso.css'
import Tag from '../components/Tag'
import imgCheck from '../assets/check.svg'
import ItemMenu from '../components/ItemMenu';
import { loadCards } from '../services/cards'
import { useState, useEffect } from 'react'
import { Course } from '../types';
import './styles/Inicio.css'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Curso () {
  const id=1;
  let tags:string[] =  ["Arduino","Robotica"]
  const [course, setCourse] = useState({} as Course)
  const getCourse = async () => {
    try {
      const res = await axios.post(`${API_LINK}/api/courses/get`, { Cantidad: 1 })
      const course : Course = res.data[0]
      return course
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
          <p className='courseInfoTitle'>Introduccion a Arduino</p>
        </div>
        <div className='courseInfoData'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, praesentium cupiditate quisquam molestias corrupti laudantium sunt assumenda illum impedit quidem autem harum quis veritatis eum voluptates. Et, quis esse. Et nulla possimus veritatis voluptatum nostrum earum est facilis, iste illum, maiores odit, eius placeat repudiandae! Nisi qui, illum ipsam obcaecati optio quis ipsum quae quas excepturi cupiditate eos soluta temporibus incidunt similique sit! Vel explicabo deleniti obcaecati sapiente velit quod, ipsa minima praesentium odio. Sint, dolor. Distinctio animi cumque nemo autem ipsum. Consectetur laudantium, numquam beatae optio expedita cum, delectus laborum nulla voluptate suscipit quasi. Assumenda expedita incidunt praesentium corrupti!</p>
          <p><span className='bold'>Categorias</span></p>
          <div className='courseInfoTagContainer'>
            {tags.map(tag => {
              return <Tag key={tag+id} type={tag} />
            })}
          </div>
          <p><span className='bold'>Reservado por:</span>{` ${100} estudiantes.`}</p>
          <p><span className='bold'>Ultima actualización: </span>{`${"10/05/2022"}`}</p>
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
            <img src='https://tfi.francobalich.com/assets/imgs/iotCourse.png' alt={`Foto del curso`}/>
            <div >
              <div  className='infoDeCompraData'>
                <div className='infoDeCompraPrecios'>
                  <p className='infoDeCompraPrecio'>$3999,99</p>
                  <p className='infoDeCompraPrecioSinDescuento'>$7999,99</p>
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
