import Image from 'next/image'
import React from 'react'

const LoginLeft = () => {
  return (
    <div className='bg-primary lg:w-[732px] w-full md:h-full h-[350px] rounded-sm mb-5'>
    <div className="flex items-center justify-center md:h-[728px] h-full">
         <Image src="/login/register.svg" alt="login-img" width="300" height="300" /></div>
    </div>
  )
}

export default LoginLeft