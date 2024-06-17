import React from 'react'
import Container from './components/Container'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar promotion={true}/>
      <Routes>
        <Route path={"/"} element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
