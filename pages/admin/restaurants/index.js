import Head from "next/head";
import React from "react";
import LayoutAdmin from "../../../layoutAdmin/LayoutAdmin";
import RestaurantContainer from "../../../feature/adminFolders/features/restaurants/restaurantContainer";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});


const Restaurants = () => {
  
  return (
    <>
      <LayoutAdmin>
        <div>
          <Head>
            <title>AdminRestaurants</title>
          </Head>
          <RestaurantContainer/>
        </div>
      </LayoutAdmin>
    </>
  );
};

export default Restaurants;
