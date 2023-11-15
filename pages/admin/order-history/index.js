import React from 'react'
import LayoutAdmin from '../../../layoutAdmin/LayoutAdmin'
import Head from 'next/head'
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HistoryOrder from '../../../feature/adminShared/components/HistoryAdminTable/History';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});


const OrderHistory = () => {
  return (
    <>
      <LayoutAdmin>
        <div>
          <Head>
            <title>OrderHistory</title>
          </Head>
          <HistoryOrder/>
        </div>
      </LayoutAdmin>
    </>
  )
}

export default OrderHistory