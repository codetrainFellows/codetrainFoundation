import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Appointment from './Pages/Appointment'
 import SponsorStudent from './Pages/SponsorStudent'
   import PartnerWithUs from './Pages/PartnerWithUs'


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Appointment" element={<Appointment />} />
       
   <Route path="/sponsor" element={<SponsorStudent />} />
   <Route path="/partner" element={<PartnerWithUs />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
