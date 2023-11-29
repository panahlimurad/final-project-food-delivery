import React from "react";
import LayoutAdmin from "../../layoutAdmin/LayoutAdmin";
import Head from "next/head";
import BottomContent from "./dashboard/BottomContent/BottomContent";
import TopContent from "./dashboard/TopContent/TopContent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useQuery } from "react-query";
import { GetUser } from "../../feature/adminShared/services/dataApi";
import { useRouter } from "next/router";
import Login from "../admin/login/index"
// import { useTranslation } from "next-i18next";


export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});



const AdminDashboard = () => {

  const router = useRouter();

  const {
    data: userData,
    isLoading: isUserLoading,
    isError: isUserError,
    error: userError,
  } = useQuery("user", GetUser, {
    onSuccess: (res) => {
      console.log("user", res);
    },
    onError: (err) => {
      console.log("!user",err);
      router.push("/admin/login")
    //   return <div>
    //   <Login/>
    // </div>; 
    },
  });

  //console.log("testing adminPage", userData);

 

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
