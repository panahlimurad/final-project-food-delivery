import React from "react";
import LayoutAdmin from "../../../layoutAdmin/LayoutAdmin";
import Head from "next/head";
import TableHistoryOrder from "../../../feature/adminShared/components/TableHistory/TableHistoryOrder";
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export const getStaticProps = async ({ locale }) => ({
//   props: {
//     ...(await serverSideTranslations(locale, ["common"])),
//   },
// });

const Orders = () => {
  return (
    <>
      <LayoutAdmin>
        <div>
          <Head>
            <title>Orders</title>
          </Head>
          <TableHistoryOrder/>
        </div>
      </LayoutAdmin>
    </>
  );
};

export default Orders;
