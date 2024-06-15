import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Home from './pages/Home'
import Features from './pages/Features'
import { AnimatePresence } from "framer-motion"
import Addpdf from "./pages/Addpdf";
import Notes from './pages/Notes';


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode='wait'  >

      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/addpdf' element={<Addpdf />} />
        <Route path='/notes' element={<Notes />} />
      </Routes>
    </AnimatePresence>

  )
}

export default AnimatedRoutes
