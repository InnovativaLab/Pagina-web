import './styles/info.css'
import { Link } from 'react-router-dom'

interface propInfo{
  title: string
  header: string
  text: string
}
export enum infoOptions {
  Terms='Terminos y condiciones',
  Privacity='Politica de privacidad',
  Cookies='Uso de cookies',
}
function Info ({ title, header, text }: propInfo) {
  return (
    <div className='infoContainer'>
      <main className='mainInfo'>
        <section className='infoTitleContainer'>
          {title}
        </section>
        <div className='infoMain'>
          <h3>{header}</h3>
          <p>{text}</p>
        </div>
      </main>
      <aside className='infoMenu'>
        <Link to='/terms'><button className={(title === infoOptions.Terms) ? 'infoMenuEnable' : 'infoMenuDisabled'}>{infoOptions.Terms}</button></Link>
        <Link to='/privacity'><button className={(title === infoOptions.Privacity) ? 'infoMenuEnable' : 'infoMenuDisabled'}>{infoOptions.Privacity}</button></Link>
        <Link to='/cookies'><button className={(title === infoOptions.Cookies) ? 'infoMenuEnable' : 'infoMenuDisabled'}>{infoOptions.Cookies}</button></Link>
      </aside>
    </div>
  )
}
export default Info
