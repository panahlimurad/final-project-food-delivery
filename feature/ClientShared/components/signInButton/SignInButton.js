import React from 'react'
import Link from 'next/link'

const SignButton = ({text, url, removeToken}) => {
  return (
    <Link href={url}>
        <button onClick={removeToken} className="bg-[#D63626] rounded-3xl w-[115px] h-[41px] font-medium text-base text-white">{text}</button>
    </Link>
  )
}

export default SignButton