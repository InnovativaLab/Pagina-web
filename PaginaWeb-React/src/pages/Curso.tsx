import ItemMenu from '../components/ItemMenu'
import imgCheck from '../assets/check.svg'
import { useState, useEffect, MouseEvent } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Tag from '../components/Tag'
import { Course, Usuario } from '../types'
import './styles/Inicio.css'
import './styles/Curso.css'
import { getCourse, reserveCourse, deleteReserveCourse, getCoursesOfUser } from '../services/services'
import { userSesion } from '../services/userSesion'

function Curso () {
  const { id } = useParams()
  const navigate = useNavigate()
  const sesion = userSesion.getInstance()
  const [course, setCourse] = useState({} as Course)
  const user: Usuario | undefined = sesion.readSesion()
  const [btnReserve, setBtnReserve] = useState(<></>)
  const [btnTags, setBtnTags] = useState(<></>)

  const reserveCourseEvent = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      // TODO: Comprobar la verificacion en tiempo real de los
      e.preventDefault()
      reserveCourse(user?.NombreDeUsuario, course.Id.toString()).then((data) => {
        sesion.saveSesion(data)
        navigate('/home', { replace: true })
      })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const deleteCourseEvent = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      // TODO: Comprobar la verificacion en tiempo real de los
      e.preventDefault()
      deleteReserveCourse(course.Id).then((data) => {
        navigate('/home', { replace: true })
      })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  useEffect(() => {
    getCourse(id).then((curso) => {
      setCourse(curso)
    })
  }, [])
  useEffect(() => {
    const usuario = sesion.readSesion()

    if (course.Categoria !== undefined) {
      setBtnTags(<div className='courseInfoTagContainer'>
        <Tag key={course.Categoria + id} type={course.Categoria} />
        <Tag key={course.Subcategoria + id} type={course.Subcategoria} />
                 </div>
      )
    }

    getCoursesOfUser(usuario?.NombreDeUsuario).then((listaCursos) => {
      const cursos = listaCursos
      if (Object.values(cursos).find(x => x.Titulo === course.Titulo) != null) {
        setBtnReserve(<ItemMenu
          text='Eliminar reserva'
          background
          style={3}
          onClick={deleteCourseEvent}
                      />)
      } else {
        setBtnReserve(<ItemMenu
          text='Reservar curso'
          background
          style={3}
          onClick={reserveCourseEvent}
                      />)
      }
    })
  }, [course])
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
            {btnTags}
            <p><span className='bold'>Reservado por:</span>{` ${100} estudiantes.`}</p>
            <p><span className='bold'>Ultima actualización: </span>{`${course.Subcategoria}`}</p>
            <p><span className='bold'>Idioma:</span>{` ${'Español'}`}</p>
          </div>
        </section>
        <section className='resultados'>
          <div className='resultadosContainerTitle'>
            <p className='resultadosTitle'>Lo que aprenderas</p>
          </div>
          <ul>
            <li><img src={imgCheck} alt='icono de check' />En este cursos aprenderas los conceptos basicos de Arduino.</li>
            <li><img src={imgCheck} alt='icono de check' />Electronica basica.</li>
            <li><img src={imgCheck} alt='icono de check' />Simuladores de robotica.</li>
            <li><img src={imgCheck} alt='icono de check' />A crear tu propio robot.</li>
          </ul>
        </section>
      </section>
      <section className='infoDeCompra'>
        <img src={course.ImagenDePortada} alt='Foto del curso' />
        <div>
          <div className='infoDeCompraData'>
            <div className='infoDeCompraPrecios'>
              <p className='infoDeCompraPrecio'>{`$${course.PrecioEnPesos}`}</p>
              <p className='infoDeCompraPrecioSinDescuento'>{`$${course.PrecioEnPesos * 2}`}</p>
            </div>
            <p>50% de descuento</p>
            {btnReserve}
            <p className='textCenter'>Garantia de 30 dias</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Curso
