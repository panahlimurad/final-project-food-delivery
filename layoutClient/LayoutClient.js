import React from 'react'
import Header from '../feature/ClientShared/header/Header'
import Footer from '../feature/ClientShared/footer/Footer'


const LayoutClient = ({children}) => {
  return (
    <>
    <Header/>
    <div className='bg-white'>
    {children}
    </div>
    
    <Footer/>
    </>
  )
}

export default LayoutClient