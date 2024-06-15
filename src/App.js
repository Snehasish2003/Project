import React from 'react'
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from './AnimatedRoutes';
import DotContainer from './components/DotContainer';
// import NavBar from './components/NavBar';



const App = () => {

  
  
  return (
    <BrowserRouter >
    
    <DotContainer /> 
    {/* <NavBar /> */}
    <Header />
    <AnimatedRoutes  />
    
    
    </BrowserRouter>
  )
}

export default App
