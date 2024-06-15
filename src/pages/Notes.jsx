import React from 'react'
import Note from '../components/Notes'
import {motion} from "framer-motion"
const Notes = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      className='w-screen h-screen overflow-x-hidden'
    >

      <Note />
    </motion.div>
    
  )
}

export default Notes
