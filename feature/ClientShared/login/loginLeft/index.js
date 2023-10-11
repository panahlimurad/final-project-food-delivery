import Image from 'next/image'
import React from 'react'

const LoginLeft = () => {
  return (
    <div className='bg-primary p-4 md:w-[732px] w-full md:h-full h-[350px] rounded-sm mb-5'>
    <div className="flex items-center justify-center md:h-[728px] h-full">
         <Image src="/login/login.svg" alt="login-img" width="300" height="300" /></div>
    </div>
  )
}

export default LoginLeft