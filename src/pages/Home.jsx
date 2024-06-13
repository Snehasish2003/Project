import React from 'react'
import Hero from '../components/Hero'
import { motion } from "framer-motion"
// import DotContainer from '../components/DotContainer'

const Home = () => {

  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
    {/* <DotContainer />   */}
      <Hero />
    </motion.div>
  )
}

export default Home
