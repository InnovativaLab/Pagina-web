import Title from '../components/Title'
import './styles/Home.css'
import Card from '../components/Card'
import { enumCourseType } from '../enums/enumData'
import axios from 'axios'

function Home () {
  let respuesta =""
  /*const readCourses=async(user:string)=>{
    const res = await axios.get(`http://localhost:3001/api?user=franco`)
    console.log(res.data);
    respuesta = res.data
    return res.data
  }*/
  return (
    <div className='home'>
      <p className='msgAlert'>¡Hola, Franco!</p>
      <p className='homeSubtitulo'>Tus cursos</p>
      <div className='cardsContinaer'>
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
      </div>
    </div>
  )
}
export default Home
