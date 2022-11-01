import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import { useState, MouseEvent, useEffect } from 'react'
import TextBox from '../components/TextBox'
import Title from '../components/Title'
import Redes from '../components/Redes'
import './styles/login.css'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Login () {
  const sesion = userSesion.getInstance()
  const [email, setEmail] = useState('')
  const [pws, setPws] = useState('')
  const navigate = useNavigate()

  const sendDataLogin = async (pEmail: string, pPws: string) => {
    try {
      const res = await axios.post(`${API_LINK}/api/user/${pEmail}`, { Contraseña: pPws })
      return res.data
    } catch (error: any) {
      console.error(error.message)
    }
  }
  const logIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      console.log('Iniciando sesion...')
      sendDataLogin(email, pws).then((data) => {
        sesion.saveSesion(data)
        navigate('/home', { replace: true })
      })
    } catch (err: any) {
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
