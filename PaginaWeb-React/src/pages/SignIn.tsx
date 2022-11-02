import { Link, useNavigate } from 'react-router-dom'
import { userSesion } from '../services/userSesion'
import ItemMenu from '../components/ItemMenu'
import Subtitle from '../components/Subtitle'
import TextBox from '../components/TextBox'
import Redes from '../components/Redes'
import Title from '../components/Title'
import { useEffect, useState, MouseEvent } from 'react'
import './styles/login.css'
import { Usuario } from '../types'
import { sendDataSignIn } from '../services/services'
import { enumGenero } from '../enum'

function SignIn () {
  const sesion = userSesion.getInstance()
  const navigate = useNavigate()
  let user: Usuario | undefined

  const [NombreDeUsuario, setNombreDeUsuario] = useState('')
  const [ContraseñaConfirmacion, setContraseñaConfirmacion] = useState('')
  const [Contraseña, setContraseña] = useState('')
  const [Apellido, setApellido] = useState('')
  const [Nombre, setNombre] = useState('')
  const [Email, setEmail] = useState('')
  const [Genero, setGenero] = useState('')

  const signIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    try {
      e.preventDefault()
      user = { NombreDeUsuario, Nombre, Apellido, Contraseña, Email, Preferencias: '', Estado: 'Sin verificar', Genero }
      sendDataSignIn(user).then((data) => {
        sesion.saveSesion(data)
        navigate('/', { replace: true })
      })
    } catch (err: any) {
      console.log(err.response)
    }
  }
  const saveGender = (event: any) => {
    setGenero(event.target.value)
  }
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

          <Subtitle msg='Nombre' />
          <TextBox placeholder='Ingresa tu Nombre' getData={(value: any) => setNombre(value)} />

          <Subtitle msg='Apellido' />
          <TextBox placeholder='Ingresa tu Apellido' getData={(value: any) => setApellido(value)} />

          <Subtitle msg='Nombre de usuario' />
          <TextBox placeholder='Ingresa tu nombre de usuario' getData={(value: any) => setNombreDeUsuario(value)} />

          <Subtitle msg='Genero' />
          <select name='select' className='combobox' onChange={saveGender}>
            <option value={enumGenero.PrefieroNoDecirlo}>{enumGenero.PrefieroNoDecirlo}</option>
            <option value={enumGenero.Masculino}>{enumGenero.Masculino}</option>
            <option value={enumGenero.Femenino}>{enumGenero.Femenino}</option>
            <option value={enumGenero.Otro}>{enumGenero.Otro}</option>
          </select>

          <Subtitle msg='Email' />
          <TextBox placeholder='Ingresa tu correo electrónico' getData={(value: any) => setEmail(value)} textType='email' />

          <Subtitle msg='Contraseña' />
          <TextBox placeholder='Ingresa tu contraseña' getData={(value: any) => setContraseña(value)} textType='password' />

          <Subtitle msg='Confirmar contraseña' />
          <TextBox placeholder='Confirme tu contraseña' getData={(value: any) => setContraseñaConfirmacion(value)} textType='password' />
          <Link to='/' className='fullSpace'>
            <ItemMenu
              text='Crear cuenta'
              background
              style={3}
              onClick={signIn}
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
