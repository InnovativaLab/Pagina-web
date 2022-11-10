import { getDataNumReservas, getDataNumCursos, getDataNumAlumnos, getDataCursos, getDataAnalisis, saveFiles } from '../services/services'
import VerticalBarChart from '../components/charts/VerticalBarChart'
import svgSombreroEgresado from '../assets/SombreroEgresado.svg'
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/PieChart'
import { userSesion } from '../services/userSesion'
import svgEstrella from '../assets/Estrella.svg'
import svgReservas from '../assets/Reservas.svg'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, MouseEvent } from 'react';
import svgUser from '../assets/User.svg'
import { enumPermisos, enumEstadoCurso, enumIdioma, enumNivel } from '../enum';
import './styles/Teacher.css'
import { DataAnalisis, Course } from '../types';
import TextBox from '../components/TextBox'
import ItemMenu from '../components/ItemMenu'
import axios from 'axios'
import MsgBox from '../components/MsgBox'
import { checkCourse } from '../services/verication';

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
            <TextBox placeholder='Ingrese el titulo' />
            <TextBox placeholder='Ingrese el subtitulo' />
            <TextBox placeholder='Ingrese el nivel' />
            <TextBox placeholder='Ingrese la categoria' />
            <TextBox placeholder='Ingrese la subcategoria' />
            <TextBox placeholder='Ingrese la descripcion' />
            <TextBox placeholder='Ingrese el precio en pesos' />
            <TextBox placeholder='Ingrese el precio en dolares' />
            <label htmlFor="inputTag" className="inputFile">
              Seleccione una imagen de portada
              <input type='file'  id="inputTag" name='avatar' onChange={saveFile}  />
            </label>
            <TextBox placeholder='Ingrese el mensaje de bienvenida' />
            <TextBox placeholder='Ingrese el mensaje de felicitaciones' />
            <input type='submit' value='Enviar' onClick={sendData} />
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
