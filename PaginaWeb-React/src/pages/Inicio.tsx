import MainInicio from '../components/MainInicio'
import './styles/Inicio.css'
import learnImg from '../assets/svgLearn.svg'
import Card from '../components/Card'
import { enumCourseType, enumSocialNetwork } from '../enums/enumData'
import SocialNetworkButton from '../components/SocialNetworkButton'
import StaffCard from '../components/StaffCard'

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
      <section className='staff'>
        <p className='staffTitle'>Aprende de la experiencia de <span className='blue'>expertos</span></p>
        <div className='staffContainer'>
          <StaffCard name='Franco Balich' description='Tecnico mecatronico y Analista en sistemas' />
          <StaffCard name='Franco Balich' description='Tecnico mecatronico y Analista en sistemas' />
          <StaffCard name='Franco Balich' description='Tecnico mecatronico y Analista en sistemas' />
        </div>
      </section>
      <section className='socialNetworks' id='Comunidad'>
        <p className='homeCourseTitle'>Nuestras comunidades</p>
        <div className='socialNetworksContainer'>
          <SocialNetworkButton tipo={enumSocialNetwork.Instagram} link='https://www.instagram.com/innovativalab/' />
          <SocialNetworkButton tipo={enumSocialNetwork.YouTube} link='https://www.youtube.com/c/InnovativaLab' />
          <SocialNetworkButton tipo={enumSocialNetwork.Twitter} link='https://twitter.com/InnovativaLab/' />
          <SocialNetworkButton tipo={enumSocialNetwork.TikTok} link='https://www.tiktok.com/@francobalich' />
        </div>
        <p className='homeCourseTitle'>+30.000 personas</p>
      </section>
      <section className='homeCourseSection' id='Cursos'>
        <p className='homeCourseTitle'>Cursos</p>
        <div className='homeCardsContainer'>
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
      </section>
      <section className='staff'>
        <p className='staffTitle'>Nuestro equipo</p>
        <div className='staffContainer'>
          <StaffCard name='Franco Balich' description='Tecnico mecatronico y Analista en sistemas' />
          <StaffCard name='Franco Balich' description='Tecnico mecatronico y Analista en sistemas' />
          <StaffCard name='Franco Balich' description='Tecnico mecatronico y Analista en sistemas' />
        </div>
      </section>
    </div>
  )
}

export default Inicio
