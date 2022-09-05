import './styles/login.css'
import olas from '../assets/OlaLogin.svg'
import Redes from '../components/Redes'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import TextBox from '../components/TextBox'
import { Link } from 'react-router-dom'

function RecoverPws () {
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
        <img className='olasLogin' src={olas} alt='Olas azules de decoracion' />
      </main>
    </div>
  )
}
export default RecoverPws
