import { checkLogInData } from '../services/verication'
import { sendDataLogin } from '../services/services'
import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import { useState, MouseEvent } from 'react'
import TextBox from '../components/TextBox'
import Title from '../components/Title'
import Redes from '../components/Redes'
import { toast } from 'react-toastify'
import { enumPermisos } from '../enum'
import './styles/login.css'

function Login () {
  const sesion = userSesion.getInstance()
  const [email, setEmail] = useState('')
  const [pws, setPws] = useState('')
  const navigate = useNavigate()

  const logIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      const validation = checkLogInData(email, pws)
      if (validation === true) {
        //console.log('Iniciando sesion...')
        sendDataLogin(email, pws).then((data) => {
          //console.log(data)
          if (data !== undefined) {
            const userDataSesion = sesion.saveSesion(data)
            let path = '/'
            if (sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
              if (userDataSesion?.RolNombre === 'Docente') {
                path = '/teacher'
              } else {
                path = '/home'
              }
            }
            navigate(path, { replace: true })
          } else {
            toast.error('No se pudo iniciar sesión.')
          }
        })
      } else {
        //console.log(validation)
        toast.error(validation)
      }
    } catch (err: any) {
      toast.error(err.response)
      console.log(err.response)
    }
  }
  return (
    <div>
      <main className='mainLogin'>
        <Redes size='big' />
        <form className='loginForm'>
          <Title msg='Inicie sesión' />
          <Subtitle msg='Email' />
          <TextBox placeholder='Ingresa tu correo electrónico' textType='email' getData={(value: any) => setEmail(value)} />
          <Subtitle msg='Contraseña' />
          <TextBox placeholder='Ingresa tu contraseña' textType='password' getData={(value: any) => setPws(value)} />
          <Link className='secondaryButton' to='/recoverpws'>
            ¿Olvidaste tu contraseña?
          </Link>
          <ItemMenu
            text='Iniciar Sesion'
            background
            style={3}
            onClick={logIn}
          />
          <Link className='secondaryButton fullSpace' to='/signin'>
            Registrarse
          </Link>
        </form>
      </main>
    </div>
  )
}
export default Login
