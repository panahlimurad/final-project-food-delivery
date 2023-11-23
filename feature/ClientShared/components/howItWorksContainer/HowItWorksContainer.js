import React from 'react'
import WorkText from './workText/WorkText'
import WorkImage from './workImage/WorkImage'
import { motion } from "framer-motion";
const HowItWorksContainer = () => {
  return (
    <motion.div className='flex flex-col mt-4 p-12 gap-4 card'  initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5}}>
        <WorkText/>
        <div
   >

        <WorkImage/>
    </div>
    </motion.div>
  )
}

export default HowItWorksContainer