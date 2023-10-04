import Head from 'next/head'
import React from 'react'
import LayoutAdmin from '../../../layoutAdmin/LayoutAdmin'
import CategoryContainer from '../../../feature/adminFolders/features/category/categoryContainer'
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });



const Offers = () => {
  return (
    <>
      <LayoutAdmin>
        <div className='text-white bg-gray-400'>
          <Head>
            <title>Offers</title>
          </Head>
          <CategoryContainer/>
        </div>
      </LayoutAdmin>
    </>
  )
}

export default Offers