import { saveFiles } from '../services/services'
import { userSesion } from '../services/userSesion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, MouseEvent } from 'react';
import { enumPermisos, enumEstadoCurso, enumIdioma, enumNivel, enumCategoriaCurso } from '../enum';
import './styles/Teacher.css'
import { Course } from '../types';
import TextBox from '../components/TextBox'
import ItemMenu from '../components/ItemMenu'
import MsgBox from '../components/MsgBox'
import { checkCourse } from '../services/verication';
import Subtitle from '../components/Subtitle'

function PublishCourse () {
  const sesion = userSesion.getInstance()
  let course:Course ={
    Id: 0,
    Titulo: "",
    Subtitulo: "",
    Nivel: enumNivel.Principiante,
    Categoria: "",
    Subcategoria: "",
    Descripcion: "",
    Estado: enumEstadoCurso.Verificado,
    Idioma: enumIdioma.Español,
    TiempoDePublicacion: 1,
    PrecioEnPesos: 1000,
    PrecioEnDolares: 10,
    ImagenDePortada: "",
    VideoPromocional: "",
    MensajeDeBienvenida: "¡Hola!",
    MensajeDeFelicitaciones: "¡Felicidades! Terminaste el curso."
  }
  const [newCourse, setNewCourse] = useState(course)
  const [numReservas, setNumReservas] = useState(0)
  const [numCourses, setNumCourses] = useState(0)
  const [numStudents, setNumStudents] = useState(0)
  const [dataCourses, setDataCourses] = useState(0)
  const [dataAnalisis, setDataAnalisis] = useState(0)
  const [files, setFiles] = useState({ profileImg: '' })
  const [fechas, setFechas] = useState(<></>)
  const [errorMsg, setMsg] = useState(<></>)
  const navigate = useNavigate()
  window.scrollTo(0, 0)

  const publishCourse = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      const validation = checkCourse(newCourse)
      console.log(validation);
      if (validation === true) {
        setMsg(<></>)
        saveFiles(files.profileImg).then(res => {
          console.log(res)
        })
      } else {
        setMsg(<MsgBox text={validation} />)
      }
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const sendData = (e: any) => {
    e.preventDefault()
    saveFiles(files.profileImg).then(res => {
      console.log(res)
    })
  }
  const saveFile = (e: any) => {
    setFiles({ profileImg: e.target.files[0] })
  }
  const saveNivel = (event: any) => {
    course=course.Nivel=event.target.value
    setNewCourse(course)
  }
  useEffect(() => {
    if (!sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
      navigate('/', { replace: true })
    } else {
      const userDataSesion = sesion.readSesion()
      if (userDataSesion?.RolNombre !== 'Docente') {
        navigate('/home', { replace: true })
      }
    }
  }, [])
  return (
    <div className='section'>
      <div className='dataSection'>
        <section className='analiticSection'>
          <p className='msgAlert'>Publicar un curso</p>
          <form className='itemContainer'>
            <Subtitle msg='Titulo' />
            <TextBox placeholder='Ingrese el titulo' />
            <Subtitle msg='Subtitulo' />
            <TextBox placeholder='Ingrese el subtitulo' />

            <Subtitle msg='Nivel' />
            <select name='select' className='combobox' onChange={saveNivel}>
              <option value={enumNivel.Principiante}>{enumNivel.Principiante}</option>
              <option value={enumNivel.Intermeido}>{enumNivel.Intermeido}</option>
              <option value={enumNivel.Avanzado}>{enumNivel.Avanzado}</option>
            </select>
            <div className='inputContainer'>
              <div className='columnInput'>
                <Subtitle msg='Categoria' />
                <select name='select' className='combobox' onChange={saveNivel}>
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
                <Subtitle msg='Subcategoria' />
                <select name='select' className='combobox' onChange={saveNivel}>
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
            <TextBox placeholder='Ingrese la descripcion' />

            <div className='inputContainer'>
              <div className='columnInput'>
              <Subtitle msg='Precio en pesos' />
            <TextBox placeholder='Ingrese el precio en pesos' />
              </div>
              <div className='columnInput'>
              <Subtitle msg='Precio en dolares' />
            <TextBox placeholder='Ingrese el precio en dolares' />
              </div>
            </div>
            <div className='inputContainer'>
              <div className='columnInput'>
              <Subtitle msg='Imagen de portada' />
            <label htmlFor="inputTag" className="inputFile">
              Seleccione una imagen
              <input type='file'  id="inputTag" name='avatar' onChange={saveFile}  />
            </label>
              </div>
              <div className='columnInput'>
              <Subtitle msg='Video promocional' />
            <label htmlFor="inputTag" className="inputFile">
              Seleccione un video
              <input type='file'  id="inputTag" name='avatar' onChange={saveFile}  />
            </label>
              </div>
            </div>
            <Subtitle msg='Mensaje de bienvenida' />
            <TextBox placeholder='Ingrese el mensaje de bienvenida' />
            <Subtitle msg='Mensaje de felicitaciones' />
            <TextBox placeholder='Ingrese el mensaje de felicitaciones' />
            <ItemMenu
              text='Publicar curso'
              background
              style={3}
              onClick={publishCourse}
            />
            {errorMsg}
          </form>
        </section>
      </div>
    </div>
  )
}

export default PublishCourse
