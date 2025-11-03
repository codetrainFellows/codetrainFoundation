import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero'

function App() {

  return (
    <>
    <BrowserRouter>
     <Navbar />
     <HeroSection />
    <Routes>
      


    </Routes>
    
    
    </BrowserRouter>
   
    </>
  )
}

export default App
