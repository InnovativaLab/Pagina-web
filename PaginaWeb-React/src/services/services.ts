import { Course, Usuario } from '../types'
import axios from 'axios'
import { loadCards } from './cards'
const API_LINK = 'http://localhost:3001'

export const getCourses = async () => {
  const coursesCards: JSX.Element[] = []
  try {
    const res = await axios.post(`${API_LINK}/api/courses/get`)
    const courses: Course[] = res.data
    const coursesElements: JSX.Element[] = loadCards(courses)
    return coursesElements
  } catch (err: any) {
    console.log(err.response)
    return coursesCards
  }
}
export const getCoursesOfUser = async (pNameUser:string|undefined) => {
  const coursesCards: JSX.Element[] = []
  try {
    if(pNameUser!==undefined){
      const res = await axios.get(`${API_LINK}/api/reserve/${pNameUser}`)
      const courses: Course[] = res.data
      console.log(courses);
      const coursesElements: JSX.Element[] = loadCards(courses)
      console.log(coursesElements)
      return coursesElements
    }
    return coursesCards
  } catch (err: any) {
    console.log(err.response)
    return coursesCards
  }
}
export const sendDataLogin = async (pEmail: string, pPws: string) => {
  try {
    const res = await axios.post(`${API_LINK}/api/user/${pEmail}`, { Contraseña: pPws })
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const sendDataToFind = async (toFind?: string) => {
  try {
    const res = await axios.post(`${API_LINK}/api/courses/get`, { Titulo: toFind })
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const getCourse = async (id?: string) => {
  try {
    const res = await axios.get(`${API_LINK}/api/courses/${id}`)
    const curso: Course = res.data
    return curso
  } catch (err: any) {
    console.log(err.response)
    return {} as Course
  }
}
export const sendDataSignIn = async (pUser?: Usuario) => {
  try {
    if (pUser !== undefined) {
      const res = await axios.post(`${API_LINK}/api/user`, pUser)
      return res.data
    }
    return undefined
  } catch (error: any) {
    console.error(error.message)
  }
}
export const reserveCourse = async (pNombreDeUsuario: string|undefined, pIdCourse: string|undefined) => {
  try {
    console.log("Se reservo el curso")
    if(pNombreDeUsuario!==undefined&&pIdCourse!==undefined){
      const res = await axios.post(`${API_LINK}/api/reserve`, {"CursoId":pIdCourse,"NombreDeUsuario":pNombreDeUsuario})
      return res.data
    }
    return null
  } catch (error: any) {
    console.error(error.message)
  }
}