import Cookies from 'universal-cookie'
import { Usuario } from '../types'
import { enumPermisos } from '../enum'

const cookies = new Cookies()

export class userSesion {
  private static instance: userSesion
  private static user: Usuario

  private constructor () { }

  public static getInstance (): userSesion {
    if (!userSesion.instance) {
      userSesion.instance = new userSesion()
    }
    return userSesion.instance
  }

  public readSesion = () => {
    if (!userSesion.user) {
      userSesion.user = cookies.get('user')
    }
    return userSesion.user
  }

  public saveSesion = (data: Usuario) => {
    cookies.set('user', data, { path: '/' })
    userSesion.user = data
  }
  public isLogged = () => {
    console.log(userSesion.user.NombreDeUsuario)
    if (userSesion.user.NombreDeUsuario!==undefined) {
      return true
    }
    return false
  }
  public isAuthorized = (permiso: enumPermisos) => {
    // if(permiso===)
  }
}

export function clientCodeTest () {
  const s1 = userSesion.getInstance()
  const s2 = userSesion.getInstance()

  if (s1 === s2) {
    console.log('Singleton works, both variables contain the same instance.')
  } else {
    console.log('Singleton failed, variables contain different instances.')
  }
}
