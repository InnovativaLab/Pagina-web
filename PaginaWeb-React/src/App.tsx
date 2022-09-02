import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainInicio from './components/MainInicio'
import fondoOlas from "./assets/fondoOlas.svg"
import Footer from './components/Footer'
function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <MainInicio />
      <img className='FondoOlas' src={fondoOlas} alt="Olas celestes"/>
      <Footer />
    </div>
  )
}

export default App
