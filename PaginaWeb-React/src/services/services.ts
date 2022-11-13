import { Course, Usuario } from '../types'
import axios from 'axios'
import { loadCards, loadRemoveCards } from './cards'
import { API_LINK } from '../enum'

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
export const getCoursesOfUser = async (pNameUser: string | undefined) => {
  let courses: Course[] = []
  try {
    if (pNameUser !== undefined) {
      const res = await axios.get(`${API_LINK}/api/reserve/${pNameUser}`)
      courses = res.data
      return courses
    }
    return courses
  } catch (err: any) {
    console.log(err.response)
    return courses
  }
}
export const getCoursesOfUserJSX = async (pNameUser: string | undefined) => {
  const coursesCards: JSX.Element[] = []
  try {
    if (pNameUser !== undefined) {
      const res = await axios.get(`${API_LINK}/api/reserve/${pNameUser}`)
      const courses: Course[] = res.data
      // console.log(courses)
      const coursesElements: JSX.Element[] = loadCards(courses)
      // console.log(coursesElements)
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
export const reserveCourse = async (pNombreDeUsuario: string | undefined, pIdCourse: string | undefined) => {
  try {
    console.log('Se reservo el curso')
    if (pNombreDeUsuario !== undefined && pIdCourse !== undefined) {
      const res = await axios.post(`${API_LINK}/api/reserve`, { CursoId: pIdCourse, NombreDeUsuario: pNombreDeUsuario })
      return res.data
    }
    return null
  } catch (error: any) {
    console.error(error.message)
  }
}
export const deleteReserveCourse = async (pId: string | undefined) => {
  try {
    console.log(pId)
    if (pId !== undefined) {
      const res = await axios.delete(`${API_LINK}/api/reserve/${pId}`)
      return res.data
    }
    return null
  } catch (error: any) {
    console.error(error.message)
  }
}
export const getDataNumReservas = async () => {
  try {
    const res = await axios.post(`${API_LINK}/api/data/numReserves`)
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const getDataNumCursos = async () => {
  try {
    const res = await axios.post(`${API_LINK}/api/data/numCourses`)
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const getDataNumAlumnos = async () => {
  try {
    const res = await axios.post(`${API_LINK}/api/data/numStudents`)
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const getDataCursos = async () => {
  try {
    const res = await axios.post(`${API_LINK}/api/data/dataCourses`)
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const getDataAnalisis = async () => {
  try {
    const res = await axios.post(`${API_LINK}/api/data/dataAnalisis`)
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const saveFiles = async (files: string) => {
  try {
    const formData = new FormData()
    formData.append('profileImg', files)
    const res = await axios.post(`${API_LINK}/api/saveFile`, formData)
    return res.data
  } catch (error: any) {
    console.error(error.message)
  }
}
export const createCourse = async (pCourse?: Course) => {
  try {
    const res = await axios.post(`${API_LINK}/api/saveCourses`, pCourse)
    return res.data
  } catch (err: any) {
    console.log(err.response)
    return {} as Course
  }
}
export const saveChangesCourse = async (pCourse: Course) => {
  try {
    // console.log(pCourse)
    const res = await axios.patch(`${API_LINK}/api/courses/${pCourse.Id}`, pCourse)
    return res.data
  } catch (err: any) {
    console.log(err.response)
    return {} as Course
  }
}
export const changeStateCourse = async (pId?: string,pState?:string) => {
  try {
    // console.log(pCourse)
    const res = await axios.post(`${API_LINK}/api/changeStateCourse/${pId}`,{"Estado":pState})
    return res.data
  } catch (err: any) {
    console.log(err.response)
    return {} as Course
  }
}
export const getRemoveCourses = async () => {
  const coursesCards: JSX.Element[] = []
  let courses: Course[] = []
  try {
    const res = await axios.get(`${API_LINK}/api/removeCourses`)
    let courses = res.data
    return courses
  } catch (err: any) {
    console.log(err.response)
    return courses
  }
}