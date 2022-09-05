import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import {Route, Routes} from "react-router-dom"

function App () {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
