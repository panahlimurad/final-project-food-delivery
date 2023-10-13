import HowItWorksContainer from '../../feature/ClientShared/components/howItWorksContainer/HowItWorksContainer'
import React from 'react'
import LayoutClient from '../../layoutClient/LayoutClient'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})


const HowItWorks = () => {
  return (
    <div>
      <LayoutClient>
      <HowItWorksContainer/>
      </LayoutClient>
      
    </div>
  )
}

export default HowItWorks