import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Villas from './Pages/Villas'
import Location from './Pages/Location'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import BookNow from './Pages/BookNow'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/villas' element={<Villas />} />
        <Route path='/locations' element={<Location />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booknow' element={<BookNow />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
