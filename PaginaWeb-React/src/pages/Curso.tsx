import { getCourse, reserveCourse, deleteReserveCourse, getCoursesOfUser, getNumReservasDeCurso } from '../services/services'
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
  const [numReserves, setNumReserves] = useState(0)
  const [btnEdit, setBtnEdit] = useState(<></>)
  const [preview, setPreview] = useState(<></>)
  const [stateRemoved, setStateRemoved] = useState('')

  const reserveCourseEvent = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      reserveCourse(user?.NombreDeUsuario, course.Id.toString()).then((data) => {
        sesion.saveSesion(data)
        navigate('/login', { replace: true })
      })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const deleteCourseEvent = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      deleteReserveCourse(course.Id, user?.NombreDeUsuario).then((data) => {
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
    setPreview(<video className='videoPreview' src={course.VideoPromocional} autoPlay title='Reproductor de video' controls>
      Tu navegador no admite el elemento <code>video</code>.
    </video>)
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
    /// getNumReservasDeCurso
    getNumReservasDeCurso(course.Id).then((num) => {
      setNumReserves(num.NumeroDeReservas)
    })
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
            <p><span className='bold'>Reservado por:</span>{` ${numReserves} estudiantes.`}</p>
            <p><span className='bold'>Ultima actualización: </span>11/2022</p>
            <p><span className='bold'>Idioma:</span>{` ${'Español'}`}</p>
          </div>
        </section>
        <section className='resultados'>
          <div className='resultadosContainerTitle'>
            <p className='resultadosTitle'>En este curso:</p>
          </div>
          <ul>
            <li><img src={imgCheck} alt='icono de check' />Material multimedia a tu disposición.</li>
            <li><img src={imgCheck} alt='icono de check' />Archivos pdf para leer.</li>
            <li><img src={imgCheck} alt='icono de check' />Actividades asincronicas.</li>
            <li><img src={imgCheck} alt='icono de check' />Crearas tus propios proyectos.</li>
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
