// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PageHeader from "shared/components/PageHeader";
// import {
//   getAsyncRestaurant,
//   selIsLoading,
//   selRestaurantList,
// } from "store/slices/restaurantsSlice";
// import RestaurantCards from "../restaurantCards";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";

import RestaurantCards from "../restaurantCards";

const RestaurantContainer = () => {
  // const restaurantList = useSelector(selRestaurantList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncRestaurant());
  // }, [dispatch]);

  return (

      <div className="h-[600px] overflow-y-auto">
      <div className="grid xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 xl:gap-4 gap-5">
          <RestaurantCards/>
          <RestaurantCards/>
          <RestaurantCards/>
          <RestaurantCards/>
    
      </div>
      </div>
  );
};

export default RestaurantContainer;
