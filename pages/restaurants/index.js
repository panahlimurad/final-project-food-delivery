import CardRestaurantContainer from "../../feature/ClientShared/CardRestaurantContainer/CardRestaurantContainer";
import NavbarRestaurant from "../../feature/ClientShared/RestaurantNavbar/NavbarRestaurant";
import LayoutClient from '../../layoutClient/LayoutClient'

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
