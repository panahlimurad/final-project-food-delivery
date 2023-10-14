import React from 'react'
import LayoutClient from '../layoutClient/LayoutClient'
import Image from "next/image";
import ErrorImg from '../public/svg/ErrorImg.svg'




const ErrorPage = () => {

  const desing = {
    width: '1373px',
    height: '727px',
    
  }

  return (
    <LayoutClient>
      <div>
        <Image style={desing}  src={ErrorImg}/>
      </div>
    </LayoutClient>
    
  )
}

export default ErrorPage