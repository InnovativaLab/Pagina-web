import React from 'react'
import MainInicio from '../components/MainInicio'
import fondoOlas from '../assets/fondoOlas.svg'
import "./styles/Inicio.css"

function Inicio() {
  return (
    <div>
        <MainInicio />
        <div className='contenedorFondoOlas'>
        <img className='FondoOlas' src={fondoOlas} alt='Olas celestes' />
        </div>
    </div>
  )
}

export default Inicio