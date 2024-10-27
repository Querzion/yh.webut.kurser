import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'

import MobileButton from './components/MobileButton/MobileButton'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import "./App.css"

const App = () => {
  return (
    <BrowserRouter>
        <MobileButton />
        <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
        <Footer />
        </div>
    </BrowserRouter>
  )
}

export default App