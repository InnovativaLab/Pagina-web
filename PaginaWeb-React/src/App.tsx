import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainInicio from './components/MainInicio'
import fondoOlas from "./assets/fondoOlas.svg"
function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <MainInicio />
      <img src={fondoOlas} alt="Olas celestes"/>
    </div>
  )
}

export default App
