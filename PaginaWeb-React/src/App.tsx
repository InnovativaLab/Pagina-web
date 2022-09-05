import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
        <Inicio />
      <Footer />
    </div>
  )
}

export default App
