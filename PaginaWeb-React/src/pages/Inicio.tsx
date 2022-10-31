import SocialNetworkButton from '../components/SocialNetworkButton'
import MainInicio from '../components/MainInicio'
import StaffCard from '../components/StaffCard'
import { loadCards } from '../services/cards'
import learnImg from '../assets/svgLearn.svg'
import { useState, useEffect } from 'react'
import { enumRedSocial } from '../enum'
import { Course } from '../types'
import './styles/Inicio.css'
import axios from 'axios'

const API_LINK = 'http://localhost:3001'

function Inicio () {
  const coursesCards: JSX.Element[] = []
  const [listCourses, setListCourses] = useState(coursesCards)
  const getCourses = async () => {
    try {
      const res = await axios.post(`${API_LINK}/api/courses/get`, { Cantidad: 3 })
      const courses: Course[] = res.data
      const coursesElements: JSX.Element[] = loadCards(courses)
      return coursesElements
    } catch (err: any) {
      console.log(err.response)
      return coursesCards
    }
  }
  useEffect(() => {
    getCourses().then((listaCursos) => {
      setListCourses(listaCursos)
    })
  }, [])
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
          <SocialNetworkButton tipo={enumRedSocial.Instagram} link='https://www.instagram.com/innovativalab/' />
          <SocialNetworkButton tipo={enumRedSocial.YouTube} link='https://www.youtube.com/c/InnovativaLab' />
          <SocialNetworkButton tipo={enumRedSocial.Twitter} link='https://twitter.com/InnovativaLab/' />
          <SocialNetworkButton tipo={enumRedSocial.TikTok} link='https://www.tiktok.com/@francobalich' />
        </div>
        <p className='homeCourseTitle'>+30.000 personas</p>
      </section>
      <section className='homeCourseSection' id='Cursos'>
        <p className='homeCourseTitle'>Cursos</p>
        <div className='homeCardsContainer'>
          {listCourses}
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
