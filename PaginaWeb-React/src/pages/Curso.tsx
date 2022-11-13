import { getCourse, reserveCourse, deleteReserveCourse, getCoursesOfUser } from '../services/services'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect, MouseEvent } from 'react'
import { userSesion } from '../services/userSesion'
import ItemMenu from '../components/ItemMenu'
import btnPlay from '../assets/playBtn.png'
import imgCheck from '../assets/check.svg'
import { Course, Usuario } from '../types'
import { enumEstadoCurso } from '../enum'
import Tag from '../components/Tag'
import './styles/Curso.css'

function Curso () {
  const { id } = useParams()
  const navigate = useNavigate()
  const sesion = userSesion.getInstance()
  const [course, setCourse] = useState({} as Course)
  const user: Usuario | undefined = sesion.readSesion()
  const [btnReserve, setBtnReserve] = useState(<></>)
  const [btnTags, setBtnTags] = useState(<></>)
  const [btnEdit, setBtnEdit] = useState(<></>)
  const [preview, setPreview] = useState(<></>)
  const [stateRemoved, setStateRemoved] = useState('')

  const reserveCourseEvent = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
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
      e.preventDefault()
      deleteReserveCourse(course.Id).then((data) => {
        navigate('/home', { replace: true })
      })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const editCourseEvent = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      navigate(`/edit/${course.Id}`, { replace: true })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const chargeVideo = () => {
    console.log('clic')
    setPreview(<iframe className='videoPreview' src='../server/uploads/1668191469815.mp4' title='Reproductor de video' />)
  }

  useEffect(() => {
    getCourse(id).then((curso) => {
      setCourse(curso)
      if (curso.Estado === enumEstadoCurso.Retirado) {
        setStateRemoved('RETIRADO')
      }
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
          style={4}
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
      const userDataSesion = sesion.readSesion()
      if (userDataSesion?.RolNombre === 'Docente') {
        setBtnEdit(<ItemMenu
          text='Editar curso'
          background
          style={4}
          onClick={editCourseEvent}
                   />)
      }
    })
    setPreview(<><img className='btnPlay' src={btnPlay} />
      <img className='imgPortada' src={course.ImagenDePortada} alt='Foto del curso' />
    </>)
  }, [course])
  return (
    <main className='cursoMain'>
      <section className='infoCurso'>
        <section className='courseInfo'>
          <div className='courseInfoContainerTitle'>
            <p className='courseInfoTitle'>{course.Titulo} {stateRemoved}</p>
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
      <section className={`infoDeCompra ${stateRemoved}`}>
        <div className='imgVistaPrevia' onClick={chargeVideo}>
          {preview}
        </div>
        <div>
          <div className='infoDeCompraData'>
            <div className='infoDeCompraPrecios'>
              <p className='infoDeCompraPrecio'>{`$${course.PrecioEnPesos}`}</p>
              <p className='infoDeCompraPrecioSinDescuento'>{`$${course.PrecioEnPesos * 1.5}`}</p>
            </div>
            <p>33% de descuento</p>
            {btnReserve}
            {btnEdit}
            <p className='textCenter'>Garantia de 30 dias</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Curso
