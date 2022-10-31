import './styles/login.css'
import Redes from '../components/Redes'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import ItemMenu from '../components/ItemMenu'
import TextBox from '../components/TextBox'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'universal-cookie'
import {CartItemProps} from '../types'
import React, {MouseEvent} from 'react';

function Login () {
  const [email, setEmail] = useState('')
  const [pws, setPws] = useState('')
  const navigate = useNavigate()
  const cookies = new Cookies()

  const sendDataLogin=async (pEmail:string,pPws:string) => {
    const res = await axios.post(`http://localhost:3001/api/user/${pEmail}`, { Contraseña: pPws })
    return res.data
  }
  const logIn = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>): void => {
    console.log('Iniciando sesion...')
    try {
      const data = sendDataLogin(email,pws)
      console.log(data)
      cookies.set('user', data, { path: '/' })
      navigate('/home', { replace: true })
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
