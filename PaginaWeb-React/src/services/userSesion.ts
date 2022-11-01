import Cookies from 'universal-cookie'
import { enumPermisos } from '../enum'
import { Usuario } from '../types'

const cookies = new Cookies()

export class userSesion {
  private static instance: userSesion | undefined
  private static user: Usuario | undefined

  private constructor () { }

  public static getInstance (): userSesion {
    if (userSesion.instance === undefined) {
      userSesion.instance = new userSesion()
    }
    if (userSesion.user === undefined) {
      userSesion.user = cookies.get('user')
    }
    return userSesion.instance
  }

  public readSesion = () => {
    // console.log('Leyendo info del usuario')
    if (userSesion.user === undefined) {
      userSesion.user = cookies.get('user')
    }
    return userSesion.user
  }

  public saveSesion = (data: Usuario) => {
    cookies.set('user', data, { path: '/' })
    const usuario = this.readSesion()
    return usuario
  }

  public isLogged = () => {
    if (userSesion.user !== undefined) {
      return true
    }
    return false
  }

  public closeSesion = () => {
    userSesion.instance = undefined
    userSesion.user = undefined
    cookies.remove('user')
  }

  public isAuthorized = (permiso: enumPermisos) => {
    const finded = userSesion.user?.Permisos.find(x => x.Nombre === Object(permiso).value)
    if (finded !== undefined) return true
    return false
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
