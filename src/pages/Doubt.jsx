import React from 'react'
import { motion } from "framer-motion"
import MainSection from '../components/Doubt'
const Doubt = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='w-screen h-screen overflow-x-hidden'
    >

      <MainSection />
    </motion.div>
  )
}

export default Doubt
