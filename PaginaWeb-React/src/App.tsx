import { useState } from 'react'
import './App.css'
import ButtonCallToAction from './components/ButtonCallToAction'
import Browser from './components/Browser'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Browser />
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
