import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import TextBox from '../components/TextBox'
import Redes from '../components/Redes'
import Title from '../components/Title'
import { useEffect } from 'react'
import './styles/login.css'

function SignIn () {
  const sesion = userSesion.getInstance()
  const navigate = useNavigate()
  useEffect(() => {
    if (sesion.isLogged()) {
      navigate('/home', { replace: true })
    }
  }, [])
  return (
    <div>
      <main className='mainLogin'>
        <Redes size='big' />
        <form className='loginForm'>
          <Title msg='Registrarse' />

          <Subtitle msg='Nombre y Apellido' />
          <TextBox placeholder='Ingresa tu nombre y Apellido' />

          <Subtitle msg='Nombre de usuario' />
          <TextBox placeholder='Ingresa tu nombre de usuario' />

          <Subtitle msg='Email' />
          <TextBox placeholder='Ingresa tu correo electrónico' />

          <Subtitle msg='Contraseña' />
          <TextBox placeholder='Ingresa tu contraseña' />

          <Subtitle msg='Confirmar contraseña' />
          <TextBox placeholder='Confirme tu contraseña' />
          <Link to='/' className='fullSpace'>
            <ItemMenu
              text='Crear cuenta'
              background
              style={3}
            />
          </Link>
          <Link className='secondaryButton fullSpace' to='/'>
            Cancelar
          </Link>
        </form>
      </main>
    </div>
  )
}
export default SignIn
