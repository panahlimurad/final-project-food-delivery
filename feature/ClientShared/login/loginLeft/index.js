import Image from 'next/image'
import React from 'react'

const LoginLeft = () => {
  return (
    <div className='bg-primary w-[53%] h-full rounded-sm'>
    <div className="flex items-center justify-center h-[728px]">
         <Image src="/login/login.svg" alt="login-img" width="500" height="500" /></div>
    </div>
  )
}

export default LoginLeft