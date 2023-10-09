import React from 'react'
import WorkText from './workText/WorkText'
import WorkImage from './workImage/WorkImage'

const HowItWorksContainer = () => {
  return (
    <div className='flex flex-col mt-4 p-12 gap-4'>
        <WorkText/>
        <WorkImage/>
    </div>
  )
}

export default HowItWorksContainer