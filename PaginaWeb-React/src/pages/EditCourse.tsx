import { enumPermisos, enumEstadoCurso, enumIdioma, enumNivel, enumCategoriaCurso } from '../enum'
import { saveFiles, createCourse, getCourse, saveChangesCourse } from '../services/services'
import { useState, useEffect, MouseEvent } from 'react'
import { checkCourse } from '../services/verication'
import { userSesion } from '../services/userSesion'
import { useNavigate, useParams } from 'react-router-dom'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import TextBox from '../components/TextBox'
import { toast } from 'react-toastify'
import './styles/Teacher.css'
import { Course } from '../types'

function EditCourse () {
  const { id } = useParams()
  const [course, setCourse] = useState({
    Id: id,
    Titulo: '',
    Subtitulo: '',
    Nivel: enumNivel.Principiante,
    Categoria: '',
    Subcategoria: '',
    Descripcion: '',
    Estado: enumEstadoCurso.Verificado,
    Idioma: enumIdioma.Español,
    TiempoDePublicacion: 1,
    PrecioEnPesos: 0,
    PrecioEnDolares: 0,
    ImagenDePortada: '',
    VideoPromocional: '',
    MensajeDeBienvenida: '',
    MensajeDeFelicitaciones: ''
  } as Course)
  const sesion = userSesion.getInstance()
  const [files, setFiles] = useState({ image: '', video: '' })
  const navigate = useNavigate()

  const saveCourse = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      // console.log(course)
      const validation = checkCourse(course)
      // console.log(validation)
      if (validation === true) {
        // console.log(course)
        saveChangesCourse(course).then((data) => {
          console.log(data)
          navigate(`/course/${id}`, { replace: true })
        })
      } else {
        toast.error(validation)
      }
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const saveNivel = (event: any) => {
    course.Nivel = event.target.value
    setCourse(course)
  }
  const saveCategoria = (event: any) => {
    course.Categoria = event.target.value
    setCourse(course)
  }
  const saveSubcategoria = (event: any) => {
    course.Subcategoria = event.target.value
    setCourse(course)
  }
  const saveImg = (e: any) => {
    e.preventDefault()
    setFiles(files.image = e.target.files[0])
    saveFiles(files.image).then(res => {
      course.ImagenDePortada = res.path
      setCourse(course)
    })
  }
  const saveVideo = (e: any) => {
    e.preventDefault()
    setFiles(files.video = e.target.files[0])
    saveFiles(files.video).then(res => {
      course.VideoPromocional = res.path
      setCourse(course)
    })
  }
  useEffect(() => {
    if (!sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
      navigate('/', { replace: true })
    } else {
      const userDataSesion = sesion.readSesion()
      if (userDataSesion?.RolNombre !== 'Docente') {
        navigate('/home', { replace: true })
      }
      getCourse(id).then((curso) => {
        setCourse(curso)
      })
    }
  }, [])
  return (
    <div className='section'>
      <div className='dataSection'>
        <section className='analiticSection'>
          <p className='msgAlert'>Editar "{course.Titulo}"</p>
          <form className='itemContainer'>
            <Subtitle msg='Titulo' />
            <TextBox
              placeholder={course.Titulo} getData={(value: any) => {
                course.Titulo = value
                setCourse(course)
              }}
            />
            <Subtitle msg='Subtitulo' />
            <TextBox
              placeholder={course.Subtitulo} getData={(value: any) => {
                course.Subtitulo = value
                setCourse(course)
              }}
            />

            <Subtitle msg={`Nivel (${course.Nivel})`} />
            <select name='select' className='combobox' onChange={saveNivel}>
              <option value={enumNivel.Principiante}>{enumNivel.Principiante}</option>
              <option value={enumNivel.Intermeido}>{enumNivel.Intermeido}</option>
              <option value={enumNivel.Avanzado}>{enumNivel.Avanzado}</option>
            </select>
            <div className='inputContainer'>
              <div className='columnInput'>
                <Subtitle msg={`Categoria (${course.Categoria})`} />
                <select name='select' className='combobox' onChange={saveCategoria}>
                  <option value={enumCategoriaCurso.Arduino}>{enumCategoriaCurso.Arduino}</option>
                  <option value={enumCategoriaCurso.DesarrolloWeb}>{enumCategoriaCurso.DesarrolloWeb}</option>
                  <option value={enumCategoriaCurso.Electronica}>{enumCategoriaCurso.Electronica}</option>
                  <option value={enumCategoriaCurso.Impresion3D}>{enumCategoriaCurso.Impresion3D}</option>
                  <option value={enumCategoriaCurso.Programacion}>{enumCategoriaCurso.Programacion}</option>
                  <option value={enumCategoriaCurso.Robotica}>{enumCategoriaCurso.Robotica}</option>
                  <option value={enumCategoriaCurso.Tinkercad}>{enumCategoriaCurso.Tinkercad}</option>
                </select>
              </div>
              <div className='columnInput'>
                <Subtitle msg={`Subcategoria (${course.Subcategoria})`} />
                <select name='select' className='combobox' onChange={saveSubcategoria}>
                  <option value={enumCategoriaCurso.Arduino}>{enumCategoriaCurso.Arduino}</option>
                  <option value={enumCategoriaCurso.DesarrolloWeb}>{enumCategoriaCurso.DesarrolloWeb}</option>
                  <option value={enumCategoriaCurso.Electronica}>{enumCategoriaCurso.Electronica}</option>
                  <option value={enumCategoriaCurso.Impresion3D}>{enumCategoriaCurso.Impresion3D}</option>
                  <option value={enumCategoriaCurso.Programacion}>{enumCategoriaCurso.Programacion}</option>
                  <option value={enumCategoriaCurso.Robotica}>{enumCategoriaCurso.Robotica}</option>
                  <option value={enumCategoriaCurso.Tinkercad}>{enumCategoriaCurso.Tinkercad}</option>
                </select>
              </div>
            </div>

            <Subtitle msg='Descripción' />
            <TextBox
              placeholder='Ingrese la descripcion' getData={(value: any) => {
                course.Descripcion = value
                setCourse(course)
              }}
            />

            <div className='inputContainer'>
              <div className='columnInput'>
                <Subtitle msg='Precio en pesos' />
                <TextBox
                  placeholder={course.PrecioEnPesos.toString()} getData={(value: any) => {
                    course.PrecioEnPesos = value
                    setCourse(course)
                  }}
                />
              </div>
              <div className='columnInput'>
                <Subtitle msg='Precio en dolares' />
                <TextBox
                  placeholder={course.PrecioEnPesos.toString()} getData={(value: any) => {
                    course.PrecioEnDolares = value
                    setCourse(course)
                  }}
                />
              </div>
            </div>
            <div className='inputContainer'>
              <div className='columnInput'>
                <Subtitle msg='Imagen de portada' />
                <label htmlFor='inputTag' className='inputFile'>
                  Seleccione una imagen
                  <input type='file' id='inputTag' name='avatar' onChange={saveImg} />
                </label>
              </div>
              <div className='columnInput'>
                <Subtitle msg='Video promocional' />
                <label htmlFor='inputTag2' className='inputFile'>
                  Seleccione un video
                  <input type='file' id='inputTag2' name='avatar' onChange={saveVideo} />
                </label>
              </div>
            </div>
            <Subtitle msg='Mensaje de bienvenida' />
            <TextBox
              placeholder={course.MensajeDeBienvenida} getData={(value: any) => {
                course.MensajeDeBienvenida = value
                setCourse(course)
              }}
            />
            <Subtitle msg='Mensaje de felicitaciones' />
            <TextBox
              placeholder={course.MensajeDeFelicitaciones} getData={(value: any) => {
                course.MensajeDeFelicitaciones = value
                setCourse(course)
              }}
            />
            <ItemMenu
              text='Publicar curso'
              background
              style={3}
              onClick={saveCourse}
            />
          </form>
        </section>
      </div>
    </div>
  )
}

export default EditCourse
