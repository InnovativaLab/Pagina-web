import { useState, MouseEvent, useEffect } from 'react'
import { checkLogInData } from '../services/verication'
import { sendDataLogin } from '../services/services'
import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import TextBox from '../components/TextBox'
import MsgBox from '../components/MsgBox'
import Title from '../components/Title'
import Redes from '../components/Redes'
import './styles/login.css'
import { enumPermisos } from '../enum'

// TODO: Comprobar la verificacion en tiempo real de los msgError

function Login () {
  const sesion = userSesion.getInstance()
  const [email, setEmail] = useState('')
  const [pws, setPws] = useState('')
  const [errorMsg, setMsg] = useState(<></>)
  const navigate = useNavigate()
  window.scrollTo(0, 0)

  const logIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      // TODO: Comprobar la verificacion en tiempo real de los
      e.preventDefault()
      const validation = checkLogInData(email, pws)
      if (validation === true) {
        setMsg(<></>)
        console.log('Iniciando sesion...')
        sendDataLogin(email, pws).then((data) => {
          console.log(data);
          if(data!== undefined){
            const userDataSesion = sesion.saveSesion(data)
            let path = '/'
            // console.log(userDataSesion)
            if (sesion.isAuthorized(enumPermisos.VerAnaliticas)) {
              if (userDataSesion?.RolNombre === 'Docente') {
                path = '/teacher'
              } else {
                path = '/home'
              }
            }
            navigate(path, { replace: true })
          }
          setMsg(<MsgBox text="No se pudo iniciar sesion." />)
        })
      } else {
        console.log(validation)
        setMsg(<MsgBox text={validation} />)
      }
    } catch (err: any) {
      setMsg(<MsgBox text={err.response} />)
      console.log(err.response)
    }
  }/*
  useEffect(() => {
    if (sesion.isLogged()) {
      navigate('/home', { replace: true })
    }
  }, [])
  useEffect(() => {

  }, [errorMsg]) */
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
          {errorMsg}
        </form>
      </main>
    </div>
  )
}
export default Login
