import CardRestaurantContainer from "../../feature/ClientShared/components/CardRestaurantContainer/CardRestaurantContainer";
import NavbarRestaurant from "../../feature/ClientShared/components/RestaurantNavbar/NavbarRestaurant";
import LayoutClient from '../../layoutClient/LayoutClient'
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})
import React from "react";

const Restaurants = () => {
  return (
    <>
    <LayoutClient>
    <div
      className="flex mt-4 gap-8">
      <NavbarRestaurant />
      <CardRestaurantContainer />
    </div>
    </LayoutClient>
    </>
    
  );
};

export default Restaurants;
