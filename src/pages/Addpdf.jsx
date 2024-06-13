import React from 'react'
import {motion} from "framer-motion"
import Dropdown from '../components/Dropdown'
// import DotContainer from '../components/DotContainer'
const Addpdf = () => {
  return (
    <motion.div
      intial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}


    >
    {/* <DotContainer /> */}
      <Dropdown />
    </motion.div>
  )
}

export default Addpdf
