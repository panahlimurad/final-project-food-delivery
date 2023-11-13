import React from 'react'
import spinner from '../../../../public/svg/Spinners.gif'
import Image from 'next/image'
const LoaderClient = () => {
  return (
    
    <div className=' h-full flex items-center justify-center'>
      
       <Image src={spinner} alt="Example GIF"/>
    </div>
  )
}

export default LoaderClient