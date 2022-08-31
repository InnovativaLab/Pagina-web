import { useState } from 'react'
import './App.css'
import ButtonCallToAction from './components/ButtonCallToAction'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <ButtonCallToAction
        text="Comunidad"
        background={false}
        style={1}
      />
      <ButtonCallToAction
        text="Comunidad"
        background={false}
        style={1}
      />
      <ButtonCallToAction
        text="Comunidad"
        background={false}
        style={1}
      />
      <ButtonCallToAction
        text="Iniciar Sesión"
        background={true}
        style={1}
      />
    </div>
  )
}

export default App
