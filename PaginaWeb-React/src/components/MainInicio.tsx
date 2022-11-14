import { HashLink } from 'react-router-hash-link'
import FotoRobot from '../assets/robotAzul.jpg'
import ItemMenu from './ItemMenu'
import '../styles/MainInicio.css'

function MainInicio () {
  return (
    <main className='mainInicio'>
      <div className='mainContainer'>
        <div className='mainInformation'>
          <h1>Aprende sobre tecnología muy fácilmente de forma colaborativa y online.</h1>
          <h2>Cursos online sobre tecnología al alcance de todos, con enfoque práctico.</h2>
          <HashLink to='#Cursos' className='buttonItemMenu simple'>
            <ItemMenu
              text='¡Empeza ahora!'
              background
              style={1}
              onClick={() => {}}
            />
          </HashLink>
        </div>
        <img className='inicioImgRobot' src={FotoRobot} alt='Foto de un robot azul' />
      </div>
    </main>
  )
}

export default MainInicio
