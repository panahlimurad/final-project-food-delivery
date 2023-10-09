// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import { getAsyncProduct, selProductList } from "store/slices/productsSlice";
// import { selIsLoading } from "store/slices/restaurantsSlice";

import ProductCard from "../productCard";
import {GetProducts} from '../../../../adminShared/services/dataApi'
import { useQuery } from "react-query";
import { motion } from 'framer-motion';
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

  const {data, isLoading, isError, error} = useQuery("products", GetProducts,{
    onSuccess:(res)=>{
      console.log("query", res);
    }
  })
  const dataArray = data ? Object.values(data) : [];

  console.log(dataArray);

  return (

      <div className="h-[600px] overflow-y-auto">
        <div className="grid xl:grid-cols-5 2xl:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 xl:gap-8 gap-5">
      
          {dataArray[1]?.data?.map((product, index)=>(
             <motion.div
             key={product.id}
             initial={{ opacity: 0, y: 50 }} 
             animate={{ opacity: 1, y: 0 }} 
             transition={{ duration: 0.5, delay: index * 0.1 }}
             className="card"
           >
            <ProductCard
            key={product.id}
            name={product.name}
            img={product.img_url}
            price={product.price}
            description={product.description}
            />
            </motion.div>
))}
     
         
        </div>
      </div>

  );
};

export default ProductsContainer;
