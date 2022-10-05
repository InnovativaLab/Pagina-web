import './styles/Busqueda.css'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { enumCourseType } from '../enums/enumData'
import Tag from '../components/Tag'

function Busqueda () {
  return (
    <div className='browse'>
      <p className='browseTitle'>3 resultados para “Arduino”</p>
      <p className='browseSubTitle'>Filtrar por categoria</p>
      <div className='tagContainer'>
        <Tag type={enumCourseType.Arduino} />
        <Tag type={enumCourseType.Electronica} />
        <Tag type={enumCourseType.Impresion3D} />
      </div>
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
        <Card
          img=''
          alt='robot'
          title='Introduccion a Arduino'
          text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
          tags={[enumCourseType.Arduino, enumCourseType.Tinkercad, enumCourseType.Robotica]}
        />
      </div>
      <Link to='/course'>Ir al curso</Link>
    </div>
  )
}

export default Busqueda
