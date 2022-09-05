import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import {Route, Routes} from "react-router-dom"

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Inicio />} />
        <Route path='/signin' element={<Inicio />} />
        <Route path='/reoverpws' element={<Inicio />} />
        <Route path='/home' element={<Inicio />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
