import MainInicio from '../components/MainInicio'
import './styles/Inicio.css'
import learnImg from '../assets/svgLearn.svg'
import Card from '../components/Card';
import { enumCourseType } from '../enums/enumData';

function Inicio () {
  return (
    <div className='presentation'>
      <MainInicio />
      <section className='weObjects'>
        <img className='weObjectsSvg' src={learnImg} alt='Ilustracion aprendiendo' />
        <div className='weObjectsinfo'>
          <p className='weObjectsTitle'>Nuestro objetivo.</p>
          <p className='weObjectsText'>Somos una plataforma educativa con el objetivo de ser la plataforma educativa que propicie la transformación social mediante la promoción e impulso de la tecnología y sus pilares. <br /><br />Nos encargamos de garantizar una educación de calidad proporcionando una formación en base tecnológica mediante la utilización de herramientas interactivas con el fin de capacitar a los alumnos en la creación de proyectos autónomos de triple impacto.</p>
        </div>
      </section>
      <section className='homeCourseSection'>
        <p className='homeCourseTitle'>Cursos</p>
        <div className='homeCardsContainer'>
        <Card img=''
              alt='robot'
              title='Introduccion a Arduino'
              text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
              tags={[enumCourseType.Arduino,enumCourseType.Tinkercad,enumCourseType.Robotica]}
        />
        <Card img=''
              alt='robot'
              title='Introduccion a Arduino'
              text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
              tags={[enumCourseType.Arduino,enumCourseType.Tinkercad,enumCourseType.Robotica]}
        />
        <Card img=''
              alt='robot'
              title='Introduccion a Arduino'
              text='En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.'
              tags={[enumCourseType.Arduino,enumCourseType.Tinkercad,enumCourseType.Robotica]}
        />
      </div>
      </section>
      {/* <img className='FondoOlas' src={fondoOlas} alt='Olas celestes' /> */}
    </div>
  )
}

export default Inicio
