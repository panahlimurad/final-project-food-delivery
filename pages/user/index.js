import React from 'react'
import SideBar from '../../feature/ClientShared/components/sideBar/SideBar'
import CheckouSuccess from '../../feature/ClientShared/components/checkoutsuccess/CheckouSuccess'
import CheckoutPart from '../../feature/ClientShared/components/CheckoutPart/CheckoutPart'
import CheckoutYourOrder from '../../feature/ClientShared/components/CheckoutYourOrder/CheckoutYourOrder'
import LayoutClient from '../../layoutClient/LayoutClient'
const UserPage = () => {
  return (
    <LayoutClient>
    <div className='flex md:justify-between p-3 justify-center  flex-wrap-reverse md:flex-nowrap '>
      <SideBar/>
      <CheckoutPart/>
      <CheckoutYourOrder/>
      {/* <CheckouSuccess/> */}
      </div>
    </LayoutClient>
  )
}

export default UserPage