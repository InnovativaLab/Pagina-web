import { enumPermisos, enumEstadoCurso, enumIdioma, enumNivel, enumCategoriaCurso } from '../enum'
import { saveFiles, createCourse } from '../services/services'
import { useState, useEffect, MouseEvent } from 'react'
import { checkCourse, checkImgFormat, checkVideoFormat } from '../services/verication'
import { userSesion } from '../services/userSesion'
import { useNavigate } from 'react-router-dom'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import TextBox from '../components/TextBox'
import { toast } from 'react-toastify'
import './styles/Teacher.css'

function PublishCourse () {
  const sesion = userSesion.getInstance()
  const [newCourse, setNewCourse] = useState({
    Id: '0',
    Titulo: '',
    Subtitulo: '',
    Nivel: enumNivel.Principiante,
    Categoria: '',
    Subcategoria: '',
    Descripcion: '',
    Estado: enumEstadoCurso.Aprobado,
    Idioma: enumIdioma.Español,
    TiempoDePublicacion: 1,
    PrecioEnPesos: 0,
    PrecioEnDolares: 0,
    ImagenDePortada: '',
    VideoPromocional: '',
    MensajeDeBienvenida: '',
    MensajeDeFelicitaciones: ''
  })
  const [files, setFiles] = useState({ image: '', video: '' })
  const navigate = useNavigate()

  const publishCourse = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      console.log(newCourse)
      const validation = checkCourse(newCourse)
      console.log(validation)
      if (validation === true) {
        createCourse(newCourse).then((data) => {
          console.log(data)
        })
      } else {
        toast.error(validation)
      }
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const saveNivel = (event: any) => {
    newCourse.Nivel = event.target.value
    setNewCourse(newCourse)
  }
  const saveCategoria = (event: any) => {
    newCourse.Categoria = event.target.value
    setNewCourse(newCourse)
  }
  const saveSubcategoria = (event: any) => {
    newCourse.Subcategoria = event.target.value
    setNewCourse(newCourse)
  }
  const saveImg = (e: any) => {
    e.preventDefault()
    setFiles(files.image = e.target.files[0])
    const validImg = checkImgFormat((files.image as any).name)
    if (validImg === true) {
      saveFiles(files.image).then(res => {
        newCourse.ImagenDePortada = res.path
        setNewCourse(newCourse)
      })
    } else {
      toast.error(validImg)
    }
  }
  const saveVideo = (e: any) => {
    e.preventDefault()
    setFiles(files.video = e.target.files[0])
    const validVideo = checkVideoFormat((files.video as any).name)
    if (validVideo === true) {
      saveFiles(files.video).then(res => {
        newCourse.VideoPromocional = res.path
        setNewCourse(newCourse)
      })
    } else {
      toast.error(validVideo)
    }
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
            <TextBox
              placeholder='Ingrese el titulo' getData={(value: any) => {
                newCourse.Titulo = value
                setNewCourse(newCourse)
              }}
            />
            <Subtitle msg='Subtitulo' />
            <TextBox
              placeholder='Ingrese el subtitulo' getData={(value: any) => {
                newCourse.Subtitulo = value
                setNewCourse(newCourse)
              }}
            />

            <Subtitle msg='Nivel' />
            <select name='select' className='combobox' onChange={saveNivel}>
              <option value={enumNivel.Principiante}>{enumNivel.Principiante}</option>
              <option value={enumNivel.Intermedio}>{enumNivel.Intermedio}</option>
              <option value={enumNivel.Avanzado}>{enumNivel.Avanzado}</option>
            </select>
            <div className='inputContainer'>
              <div className='columnInput'>
                <Subtitle msg='Categoria' />
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
                <Subtitle msg='Subcategoria' />
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
                newCourse.Descripcion = value
                setNewCourse(newCourse)
              }}
            />

            <div className='inputContainer'>
              <div className='columnInput'>
                <Subtitle msg='Precio en pesos' />
                <TextBox
                  placeholder='Ingrese el precio en pesos' getData={(value: any) => {
                    newCourse.PrecioEnPesos = value
                    setNewCourse(newCourse)
                  }}
                />
              </div>
              <div className='columnInput'>
                <Subtitle msg='Precio en dolares' />
                <TextBox
                  placeholder='Ingrese el precio en dolares' getData={(value: any) => {
                    newCourse.PrecioEnDolares = value
                    setNewCourse(newCourse)
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
              placeholder='Ingrese el mensaje de bienvenida' getData={(value: any) => {
                newCourse.MensajeDeBienvenida = value
                setNewCourse(newCourse)
              }}
            />
            <Subtitle msg='Mensaje de felicitaciones' />
            <TextBox
              placeholder='Ingrese el mensaje de felicitaciones' getData={(value: any) => {
                newCourse.MensajeDeFelicitaciones = value
                setNewCourse(newCourse)
              }}
            />
            <ItemMenu
              text='Publicar curso'
              background
              style={3}
              onClick={publishCourse}
            />
          </form>
        </section>
      </div>
    </div>
  )
}

export default PublishCourse
