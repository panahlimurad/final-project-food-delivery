import React from 'react'
import AboutText from './abotText/AboutText'
import AboutImage from './aboutImage/AboutImage'

const AboutContainer = () => {
  return (
    <div className='justify-center lg:flex mt-4 p-12 gap-4'>
        <AboutText/>
        <AboutImage/>
    </div>
  )
}

export default AboutContainer