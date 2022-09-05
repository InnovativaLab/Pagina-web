import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import {Route, Routes} from "react-router-dom"
import Login from './pages/Login';
import SignIn from './pages/SignIn';
import RecoverPws from './pages/RecoverPws';
import Home from './pages/Home';

function App () {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/recoverpws' element={<RecoverPws />} />
        <Route path='/home' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
