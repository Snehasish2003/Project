import React from 'react'
import Half from '../components/Half'
import { motion } from "framer-motion"
import Feature from '../components/Features'
const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{  opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }} 
      className='flex z-10'
    > 
      <Half />
      <Feature />
      
    </motion.div>
  )
}

export default Features
