import React from 'react'
import LayoutClient from '../layoutClient/LayoutClient'
import Image from 'next/image'
import notFound from '../public/404.svg'
 
const ErrorPage = () => {
  return (
    <LayoutClient>
      <div>
        <Image src={notFound}></Image>
      </div>
    </LayoutClient>
    
  )
}

export default ErrorPage