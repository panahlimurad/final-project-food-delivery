import React from 'react'
import AboutText from './abotText/AboutText'
import AboutImage from './aboutImage/AboutImage'
import { motion } from "framer-motion";
const AboutContainer = () => {
  return (
    <motion.div className='justify-center lg:flex mt-4 p-12 gap-4 card' initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5}}>
        <AboutText/>
        <div 
    >

        <AboutImage/>
    </div>
    </motion.div>
  )
}

export default AboutContainer