import AboutContainer from '../../feature/ClientShared/components/aboutContainer/AboutContainer'
import React from 'react'
import LayoutClient from '../../layoutClient/LayoutClient'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})

const AboutUs = () => {
  return (
    <div>
      <LayoutClient>
        <AboutContainer/>
      </LayoutClient>
      
    </div>
  )
}

export default AboutUs