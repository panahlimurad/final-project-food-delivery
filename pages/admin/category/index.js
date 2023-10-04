import React from 'react'
import LayoutAdmin from '../../../layoutAdmin/LayoutAdmin'
import Head from 'next/head'
import CategoryContainer from '../../../feature/adminFolders/features/category/categoryContainer'
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

const Category = () => {
  return (
    <>
      <LayoutAdmin>
        <div>
          <Head>
            <title>Category</title>
          </Head>
          <CategoryContainer/>
        </div>
      </LayoutAdmin>
    </>
  )
}

export default Category