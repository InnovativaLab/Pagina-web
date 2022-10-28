import Title from '../components/Title'
import './styles/Home.css'
import Card from '../components/Card'
import { enumCourseType } from '../enums/enumData'
import axios from 'axios';
const API_LINK='http://localhost:3001'
import { Course } from '../types';
import { useState,useEffect } from 'react';

function Home () {
  let coursesCards:JSX.Element[]=[]
  const [listCourses,setListCourses]= useState(coursesCards)
  const getCourses=async()=>{
    console.log("Cargando Cursos...");
    try {
      const res = await axios.get(`${API_LINK}/api/courses`)
      const courses:Course[] = res.data
      let coursesElements:JSX.Element[]=[]
      coursesElements =  Object.values(courses).map(course=>
      <Card
        img=''
        alt='robot'
        title={course.Titulo}
        text={course.Descripcion}
        tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
      />)
      return coursesElements
    } catch (err:any) {
      console.log(err.response)
      return coursesCards
    }
  }
  useEffect(() => {
    getCourses().then((listaCursos)=>{
      setListCourses(listaCursos)
      console.log(coursesCards)
    })
  },[]);
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
