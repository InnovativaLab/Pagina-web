import Title from '../components/Title'
import './styles/Teacher.css'
import svgEstrella from '../assets/Estrella.svg'
import svgReservas from '../assets/Reservas.svg'
import svgUser from '../assets/User.svg'
import svgSombreroEgresado from '../assets/SombreroEgresado.svg'

function Teacher () {
  return (
    <div className='section'>
      <section className='analiticSection'>
        <p className='msgAlert'>Introduccion a Arduino</p>
        <div className='itemContainer'>
          <div className='itemAnalitic'>
            <img src={svgReservas} alt='Imagen de reservas' />
            <p className='itemAnaliticNumber'>300</p>
            <p className='itemAnaliticText'>Reservas</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgUser} alt='' />
            <p className='itemAnaliticNumber'>128</p>
            <p className='itemAnaliticText'>Alumnos</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgSombreroEgresado} alt='' />
            <p className='itemAnaliticNumber'>2</p>
            <p className='itemAnaliticText'>Cursos</p>
          </div>
          <div className='itemAnalitic'>
            <img src={svgEstrella} alt='' />
            <p className='itemAnaliticNumber'>15</p>
            <p className='itemAnaliticText'>Calificaciones</p>
          </div>
        </div>
      </section>

      <div className='grafic' />
      <section className='analiticSection'>
        <p className='msgAlert'>Cursos top</p>
        <ul className='listCousesTop'>
          <li className='itemCouseTop titleCouseTop'>
            <p>#</p>
            <p>Nombre</p>
            <p>Categoria</p>
            <p>Reservas</p>
          </li>
          <li className='itemCouseTop'>
            <p>#1</p>
            <p>Arduino desde cero para principantes</p>
            <p>Arduino, Robotica, Simuladores</p>
            <p>48%</p>
          </li>
          <li className='itemCouseTop'>
            <p>#2</p>
            <p>Arduino desde cero para principantes</p>
            <p>Arduino, Robotica, Simuladores</p>
            <p>48%</p>
          </li>
          <li className='itemCouseTop'>
            <p>#3</p>
            <p>Arduino desde cero para principantes</p>
            <p>Arduino, Robotica, Simuladores</p>
            <p>48%</p>
          </li>
        </ul>
      </section>
    </div>
  )
}
export default Teacher
