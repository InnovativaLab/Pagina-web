import React from 'react'
import Tag from './Tag'
import { enumCourseType } from '../enums/enumData'
import ItemMenu from './ItemMenu';
import img from "../assets/robotAzul.png"
import '../styles/Card.css'
function Card() {
  return (
    <div className='card'>
        <img src={img} alt="" />
        <div className='cardContainerInfo'>
            <p className='cardtitle'>Introduccion a Arduino</p>
            <div className='cardTagContainer'>
                <Tag text="Arduino" type={enumCourseType.Arduino}/>
                <Tag text="Tinkercad" type={enumCourseType.Tinkercad}/>
                <Tag text="Robótica" type={enumCourseType.Robotica}/>
            </div>
            <p className='cardText'>En este cursos aprenderas los conceptos basicos de Arduino, electronica basica y sobre simuladores de robotica con el objetivo de que al finalizar el mismo seas capaz de crear tu propio robot.</p>
            <ItemMenu
              text='Más información'
              background
              style={3}
            />
        </div>
    </div>
  )
}
export default Card