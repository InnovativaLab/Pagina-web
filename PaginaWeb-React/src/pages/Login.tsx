import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import { useState, MouseEvent,useEffect } from 'react'
import TextBox from '../components/TextBox'
import Title from '../components/Title'
import Redes from '../components/Redes'
import './styles/login.css'
import axios from 'axios'

function Login () {
  const sesion = userSesion.getInstance()
  const [email, setEmail] = useState('')
  const [logged, setLogged] = useState(false)
  const [pws, setPws] = useState('')
  const navigate = useNavigate()

  const sendDataLogin = async (pEmail: string, pPws: string) => {
    const res = await axios.post(`http://localhost:3001/api/user/${pEmail}`, { Contraseña: pPws })
    return res.data
  }
  const logIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      console.log('Iniciando sesion...')
      sendDataLogin(email, pws).then((data) => {
        sesion.saveSesion(data)
      })
      navigate('/home', { replace: true })
    }
    catch (err: any) {
      console.log(err.response)
    }
  }
  useEffect(() => {
  }, [])
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
