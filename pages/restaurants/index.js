import CardRestaurantContainer from "../../feature/ClientShared/components/CardRestaurantContainer/CardRestaurantContainer";
import NavbarRestaurant from "../../feature/ClientShared/components/RestaurantNavbar/NavbarRestaurant";
import LayoutClient from '../../layoutClient/LayoutClient'
import React from "react";
import {serverSideTranslations} from "next-i18next/serverSideTranslations"


export const getStaticProps = async ({locale})=>({
  props:{
      ...(await serverSideTranslations(locale, ["common"]))
  }
})

const Restaurants = () => {
  return (
    <>
    <LayoutClient>
    <div
      className="flex gap-8">
      <NavbarRestaurant />
      <CardRestaurantContainer />
    </div>
    </LayoutClient>
    </>
    
  );
};

export default Restaurants;


