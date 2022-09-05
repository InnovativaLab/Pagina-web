import './styles/login.css'
import olas from '../assets/OlaLogin.svg'
import Redes from '../components/Redes'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import TextBox from '../components/TextBox'
import { Link } from 'react-router-dom'

function Login () {
  return (
    <div>
      <main className='mainLogin'>
        <Redes size='big' />
        <form className='loginForm'>
          <Title msg='Inicie sesión' />
          <Subtitle msg='Email' />
          <TextBox placeholder='Ingresa tu correo electrónico' />
          <Subtitle msg='Contraseña' />
          <TextBox placeholder='Ingresa tu contraseña' />
          <Link className='secondaryButton' to='/recoverpws'>
            ¿Olvidaste tu contraseña?
          </Link>
          <Link to='/home' className='fullSpace'>
            <ItemMenu
              text='Iniciar Sesion'
              background
              style={3}
            />
          </Link>
          <Link className='secondaryButton fullSpace' to='/signin'>
            Registrarse
          </Link>
        </form>
        <img className='olasLogin' src={olas} alt='Olas azules de decoracion' />
      </main>
    </div>
  )
}
export default Login
