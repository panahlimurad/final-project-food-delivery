import React from "react";
import LayoutAdmin from "../../layoutAdmin/LayoutAdmin";
import Head from "next/head";
import BottomContent from "./dashboard/BottomContent/BottomContent";
import TopContent from "./dashboard/TopContent/TopContent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});



const AdminDashboard = () => {
  return (
   
      <LayoutAdmin>
        <div>
          <Head>
            <title>Dashboard</title>
          </Head>
          <TopContent />
          <BottomContent />
        </div>
      </LayoutAdmin>
  );
};

export default AdminDashboard;
