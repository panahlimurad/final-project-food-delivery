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

import { GetRestaurants } from "../../../../adminShared/services/dataApi";
import { useQuery } from "react-query";
import { motion } from "framer-motion";

const RestaurantContainer = () => {
  const { data, isLoading, isError, error } = useQuery(
    "restaurant",
    GetRestaurants,
    {
      onSuccess: (res) => {
        console.log("query", res);
      },
    }
  );
  const dataArray = data ? Object.values(data) : [];

  console.log("restaurant", dataArray);
  // const restaurantList = useSelector(selRestaurantList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncRestaurant());
  // }, [dispatch]);

  return (
   
    // <ScrollBarContainer>
      <div className="grid bg-[#1e1e30] xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 xl:gap-4">
        {dataArray[1]?.data?.map((restaurant, index) => (
          <motion.div
            key={restaurant.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card"
          >
            <RestaurantCards
              key={restaurant.id}
              name={restaurant.name}
              img={restaurant.img_url}
            />
          </motion.div>
        ))}

      </div>
    // </ScrollBarContainer>
  );
};

export default RestaurantContainer;
