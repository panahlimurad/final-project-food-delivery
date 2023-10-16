import React from 'react'
import { FooterTop } from './footerTop'
import { FooterBottom } from './footerBottom'
import { useRouter } from 'next/router'

const Footer = () => {
  const {pathname} = useRouter()

  return (
    <footer className='relative mt-72'>
   {pathname == "/" &&  <FooterTop/>  } 
      <FooterBottom/>
    </footer>
  )
}

export default Footer