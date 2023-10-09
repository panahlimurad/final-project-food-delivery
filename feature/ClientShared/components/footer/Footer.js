import React from 'react'
import { FooterTop } from './footerTop'
import { FooterBottom } from './footerBottom'

const Footer = () => {
  return (
    <footer className='relative mt-72'>
     <FooterTop/>  
      <FooterBottom/>
    </footer>
  )
}

export default Footer