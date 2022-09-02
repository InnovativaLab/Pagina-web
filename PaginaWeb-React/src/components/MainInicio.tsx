import React from 'react'
import "../styles/MainInicio.css"
import ItemMenu from './ItemMenu'
import FotoRobot from "../assets/robotAzul.png"

function MainInicio() {
  return (
    <main className='mainInicio'>
      <div className='mainContainer'>
        <div className='mainInformation'>
          <h1>Aprende sobre tecnologia muy facilmente de forma colaborativa y online.</h1>
          <h2>Cursos online sobre tecnologia al alcence de todos, con efoque practico</h2>
          <ItemMenu
              text="¡Empeza ahora!"
              background={true}
              style={1}
            />
        </div>
        <img src={FotoRobot} alt="Foto de un robot azul"/>
      </div>
    </main>
  )
}

export default MainInicio