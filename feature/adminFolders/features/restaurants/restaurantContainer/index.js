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
import ScrollBarContainer from "../../../../ClientShared/ScrollableTable/ScrollableTable"

const RestaurantContainer = () => {
  // const restaurantList = useSelector(selRestaurantList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncRestaurant());
  // }, [dispatch]);

  return (
    <ScrollBarContainer>
      
        <div className="grid bg-[#1e1e30] xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 xl:gap-4 gap-5">
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
          <RestaurantCards />
        </div>
    
    </ScrollBarContainer>
  );
};

export default RestaurantContainer;
