import './App.css'

import Header from './components/Header'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
