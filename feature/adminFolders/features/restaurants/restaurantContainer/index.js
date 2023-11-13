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
import { useQuery, useQueryClient } from "react-query";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { setCategory } from "../../../../../redux/features/productDetails/productSlice";

const RestaurantContainer = () => {

  const queryClient = useQueryClient()  

  const { data, isLoading, isError, error } = useQuery(
    "restaurant",
    GetRestaurants
  );

  
  
  const dataArray = data ? Object.values(data) : [];

  const selectedCategory = useSelector((state) => state.category);

  const filteredRestaurants = selectedCategory
    ? dataArray[1]?.data?.filter(
        (restaurant) => restaurant.category_id === selectedCategory
      
      )
    : dataArray[1]?.data;
// console.log("reduxdan gelen", filteredRestaurants);

//console.log("bu nedir?", filteredRestaurants);

  // const restaurantList = useSelector(selRestaurantList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncRestaurant());
  // }, [dispatch]);

  return (
    // <ScrollBarContainer>
    <div className="grid bg-[#1e1e30] xl:grid-cols-4 md:grid-cols-3 xs:grid-cols-2 xl:gap-4">
      {filteredRestaurants?.map((restaurant, index) => (
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
            img_url={restaurant.img_url}
            cuisine={restaurant.cuisine}
            delivery_min={restaurant.delivery_min}
            delivery_price={restaurant.delivery_price}
            item_id={restaurant.id}
            category={restaurant.category_id}
            address={restaurant.address}
          />
        </motion.div>
      ))}
    </div>
    // </ScrollBarContainer>
  );
};

export default RestaurantContainer;
