import React from 'react'
import LayoutAdmin from '../../../layoutAdmin/LayoutAdmin'
import Head from 'next/head'
import ProductsContainer from '../../../feature/adminFolders/features/products/productsContainer'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next'

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

const Products = () => {
  // const { t, i18n } = useTranslation();

  return (
    <>
    <LayoutAdmin>
      <div>
        <Head>
          <title>Products</title>
        </Head>
        <ProductsContainer/>
      </div>
    </LayoutAdmin>
  </>
  )
}

export default Products