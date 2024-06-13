import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import DotContainer from './components/DotContainer';



const App = () => {

  
  
  return (
    <BrowserRouter >
    
    <DotContainer /> 
    <Header />
    <AnimatedRoutes  />
    
    
    </BrowserRouter>
  )
}

export default App
