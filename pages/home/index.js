
import React from 'react'
import LayoutClient from "../../layoutClient/LayoutClient"
import {Section1} from '../../feature/ClientShared/homeComponents/Section1/Section1'
import {Section2} from '../../feature/ClientShared/homeComponents/Section2/Section2'
import {Section3} from '../../feature/ClientShared/homeComponents/Section3/Section3'
import {Section4} from '../../feature/ClientShared/homeComponents/Section4/Section4'

const HomePage = () => {
  return (
    <div>
      
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      

    </div>
  )
}

export default HomePage