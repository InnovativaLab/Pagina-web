import './styles/login.css'
import olas from '../assets/OlaLogin.svg'
import Redes from '../components/Redes'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import TextBox from '../components/TextBox'
import { Link } from 'react-router-dom'

function SignIn () {
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
        <img className='olasLogin' src={olas} alt='Olas azules de decoracion' />
      </main>
    </div>
  )
}
export default SignIn
