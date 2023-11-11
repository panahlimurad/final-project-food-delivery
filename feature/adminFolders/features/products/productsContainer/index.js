// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import { getAsyncProduct, selProductList } from "store/slices/productsSlice";
// import { selIsLoading } from "store/slices/restaurantsSlice";

import ProductCard from "../productCard";
import { GetProducts } from "../../../../adminShared/services/dataApi";
import { useQuery, useQueryClient } from "react-query";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import { ScrollBarContainer } from "../../../../ClientShared/Scroll/Scroll";
// import PageHeader from "shared/components/PageHeader";

// const getPostNewProduct = () => {
//   GetProducts("/api/products")
//     .then((data) => {
//       console.log("succes", data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

const ProductsContainer = () => {
  // const productList = useSelector(selProductList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncProduct());
  // }, [dispatch]);

const queryClient = useQueryClient()  

  const { data, isLoading, isError, error } = useQuery(
    "products",
    GetProducts,
    {
      onSuccess: (res) => {
        // console.log("Data:", res)
        queryClient.invalidateQueries(["products"])
      },
    }
  );



  const dataArray = data ? Object.values(data) : [];

  const selectedCategory = useSelector((state) => state.category);

  const filteredRestaurants = selectedCategory
    ? dataArray[1]?.data?.filter(
        (restaurant) => restaurant.rest_id === selectedCategory
      
      )
    : dataArray[1]?.data;
 

  return (
    <ScrollBarContainer bg="#C74FEB">
      <div>
        <div className="grid xl:grid-cols-5 2xl:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 xl:gap-8 gap-5">
          {filteredRestaurants?.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card">
              <ProductCard
                key={product.id}
                name={product.name}
                img_url={product.img_url}
                rest_id={product.rest_id}
                price={product.price}
                item_id={product.id}
                description={product.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </ScrollBarContainer>
  );
};

export default ProductsContainer;
