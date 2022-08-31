import { useState } from 'react'
import './App.css'
import ButtonCallToAction from './components/ButtonCallToAction'
import Browser from './components/Browser'

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <div className='containerMenu'>
        <Browser />
        <ButtonCallToAction
          text="Comunidad"
          background={false}
          style={2}
        />
        <ButtonCallToAction
          text="Comunidad"
          background={false}
          style={0}
        />
        <ButtonCallToAction
          text="Comunidad"
          background={false}
          style={0}
        />
        <ButtonCallToAction
          text="Iniciar Sesión"
          background={true}
          style={1}
        />
      </div>
    </div>
  )
}

export default App
