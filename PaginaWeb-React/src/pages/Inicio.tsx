import React from 'react'
import MainInicio from '../components/MainInicio'
import fondoOlas from '../assets/fondoOlas.svg'
import './styles/Inicio.css'
import learnImg from '../assets/svgLearn.svg'

function Inicio () {
  return (
    <div className='presentation'>
      <MainInicio />
      <section className='weObjects'>
        <img className='weObjectsSvg' src={learnImg} alt='Ilustracion aprendiendo' />
        <div className='weObjectsinfo'>
          <p className='weObjectsTitle'>Nuestro objetivo</p>
          <p className='weObjectsText'>Somos una plataforma educativa con el objetivo de ser la plataforma educativa que propicie la transformación social mediante la promoción e impulso de la tecnología y sus pilares. <br /><br />Nos encargamos de garantizar una educación de calidad proporcionando una formación en base tecnológica mediante la utilización de herramientas interactivas con el fin de capacitar a los alumnos en la creación de proyectos autónomos de triple impacto.</p>
        </div>
      </section>
      <img className='FondoOlas' src={fondoOlas} alt='Olas celestes' />
    </div>
  )
}

export default Inicio
