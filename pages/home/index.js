
import React from 'react'
import { Section1 } from '../../feature/ClientShared/components/homeComponents/Section1/Section1'
import { Section2 } from '../../feature/ClientShared/components/homeComponents/Section2/Section2'
import {Section3} from "../../feature/ClientShared/components/homeComponents/Section3/Section3"
import { Section4 } from '../../feature/ClientShared/components/homeComponents/Section4/Section4'
// import { serverSideTranslations } from "next-i18next/serverSideTranslations"


// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"]))
//   }
// })


export default function HomePage(){
// console.log("a",productoffer)
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3  />
      <Section4 />


    </div>
  )
}


