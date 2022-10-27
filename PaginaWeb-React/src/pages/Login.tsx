import './styles/login.css'
import olas from '../assets/OlaLogin.svg'
import Redes from '../components/Redes'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import TextBox from '../components/TextBox'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {useState} from 'react'

function Login () {
  const logIn=async()=>{
    console.log("Iniciando sesion...");
    try {
      const res = await axios.get('http://localhost:3001/api/user')
      const data = res.data
      console.log(data);
      return {  }
    } catch (err:any) {
      console.log(err.response)
      return { authToken: null, error: err.response}
    }
  }
  return (
    <div>
      <main className='mainLogin'>
        <Redes size='big' />
        <form className='loginForm'>
          <Title msg='Inicie sesión' />
          <Subtitle msg='Email' />
          <TextBox placeholder='Ingresa tu correo electrónico' onChange={handleChangeEmail} />
          <Subtitle msg='Contraseña' />
          <TextBox placeholder='Ingresa tu contraseña' />
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
