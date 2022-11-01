import Cookies from 'universal-cookie'
import {Usuario} from '../types'

const cookies = new Cookies()

export const readSesion =()=>{
    const user=cookies.get('user')
    if(user!== undefined) return user
    return null
}

export const saveSesion =(data:Usuario)=>{
    cookies.set('user', data, { path: '/' })
}