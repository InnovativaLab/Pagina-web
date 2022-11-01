import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import TextBox from '../components/TextBox'
import Redes from '../components/Redes'
import Title from '../components/Title'
import { useEffect } from 'react'
import './styles/login.css'

function RecoverPws () {
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
          <Title msg='Recuperar contraseña' />

          <Subtitle msg='Email' />
          <TextBox placeholder='Ingresa tu correo electrónico' />

          <Subtitle msg='Ingrese su código de verificación' />
          <TextBox placeholder='Ingresa tu código de verificación' />

          <Subtitle msg='Ingrese su nueva contraseña' />
          <TextBox placeholder='Ingresa tu contraseña' />

          <Subtitle msg='Confirme su nueva contraseña' />
          <TextBox placeholder='Confirme tu contraseña' />
          <Link to='/' className='fullSpace'>
            <ItemMenu
              text='Enviar codigo/Cambiar contraseña'
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
export default RecoverPws
