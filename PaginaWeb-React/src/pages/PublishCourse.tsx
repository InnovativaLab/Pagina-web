import { getDataNumReservas, getDataNumCursos, getDataNumAlumnos, getDataCursos, getDataAnalisis } from '../services/services'
import VerticalBarChart from '../components/charts/VerticalBarChart'
import svgSombreroEgresado from '../assets/SombreroEgresado.svg'
import LineChart from '../components/charts/LineChart'
import PieChart from '../components/charts/PieChart'
import { userSesion } from '../services/userSesion'
import svgEstrella from '../assets/Estrella.svg'
import svgReservas from '../assets/Reservas.svg'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import svgUser from '../assets/User.svg'
import { enumPermisos } from '../enum'
import './styles/Teacher.css'
import { DataAnalisis } from '../types'
import TextBox from '../components/TextBox'
import ItemMenu from '../components/ItemMenu'

function PublishCourse () {
  const sesion = userSesion.getInstance()
  const [numReservas, setNumReservas] = useState(0)
  const [numCourses, setNumCourses] = useState(0)
  const [numStudents, setNumStudents] = useState(0)
  const [dataCourses, setDataCourses] = useState(0)
  const [dataAnalisis, setDataAnalisis] = useState(0)
  const [files, setFiles] = useState({})
  const [fechas, setFechas] = useState(<></>)
  const navigate = useNavigate()
  window.scrollTo(0, 0)
  /* const signIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      user = { NombreDeUsuario, Nombre, Apellido, Contraseña, Email, Preferencias: '', Estado: 'Sin verificar', Genero }
      const valitadation = checkSignInData(user, ContraseñaConfirmacion)
      if (valitadation === true) {
        setMsg(<></>)
        sendDataSignIn(user).then((data) => {
          sesion.saveSesion(data)
          navigate('/', { replace: true })
        })
      } else {
        setMsg(<MsgBox text={valitadation} />)
      }
    } catch (err: any) {
      console.log(err.response)
    }
  } */
  const sendData = (e:any)=>{
    e.preventDefault()
    console.log(files)
  }
  const saveFile = (event: any) => {
      setFiles(event.target.files[0])
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
            <TextBox placeholder='Ingrese el Titulo' />
            <TextBox placeholder='Ingrese el Subtitulo' />
            <TextBox placeholder='Ingrese el Nivel' />
            <TextBox placeholder='Ingrese la Categoria' />
            <TextBox placeholder='Ingrese la subcategoria' />
            <TextBox placeholder='Ingrese la Descripcion' />
            <TextBox placeholder='Ingrese el Estado' />
            <TextBox placeholder='Ingrese el Idioma' />
            <TextBox placeholder='Ingrese el TiempoDePublicacion' />
            <TextBox placeholder='Ingrese el PrecioEnPesos' />
            <TextBox placeholder='Ingrese el PrecioEnDolares' />
            <TextBox placeholder='Ingrese el link de la imagen de portada' />
            <TextBox placeholder='Ingrese el mensaje de bienvenida' />
            <TextBox placeholder='Ingrese el mensaje de felicitaciones' />
            <input type="file" name="avatar" onChange={saveFile} />
            <input type="submit" value="Enviar" onClick={sendData} />
            <ItemMenu
              text='Publicar curso'
              background
              style={3}
              onClick={() => {}}
            />
          </form>
        </section>
      </div>
    </div>
  )
}

export default PublishCourse
