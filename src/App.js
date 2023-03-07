import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Fiche from './pages/Fiche/Fiche'
import Error from './pages/404/404'
import Apropos from './pages/A-Propos/Apropos'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'

import '../src/scss/main.scss'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:id" element={<Fiche />} />
        <Route path="about" element={<Apropos />}></Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App
