import './styles/Home.css'
import axios from 'axios'
import { Course } from '../types'
import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'
import { loadCards } from '../services/cards';
const API_LINK = 'http://localhost:3001'

function Home () {
  const coursesCards: JSX.Element[] = []
  const [listCourses, setListCourses] = useState(coursesCards)
  const cookies = new Cookies()
  const getCourses = async () => {
    console.log(cookies.get('user'))
    try {
      const res = await axios.post(`${API_LINK}/api/courses/get`)
      const courses: Course[] = res.data
      let coursesElements: JSX.Element[] = loadCards(courses)
      return coursesElements
    } catch (err: any) {
      console.log(err.response)
      return coursesCards
    }
  }
  useEffect(() => {
    getCourses().then((listaCursos) => {
      setListCourses(listaCursos)
      //console.log(coursesCards)
    })
  }, [])
  return (
    <div className='home'>
      <p className='msgAlert'>¡Hola, Franco!</p>
      <p className='homeSubtitulo'>Tus cursos</p>
      <div className='cardsContinaer'>
        {
          listCourses
        }
      </div>
    </div>
  )
}
export default Home
