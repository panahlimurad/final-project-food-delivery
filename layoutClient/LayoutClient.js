import React from 'react'

const LayoutClient = ({children}) => {
  return (
    <>
    <div>Header</div>
    {children}
    <div>Footer</div>
    </>
  )
}

export default LayoutClient