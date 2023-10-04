// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import CustomScrollbar from "shared/hooks/customScrollBar/customScrollBar";
// import { getAsyncProduct, selProductList } from "store/slices/productsSlice";
// import { selIsLoading } from "store/slices/restaurantsSlice";

import ProductCard from "../productCard";

// import PageHeader from "shared/components/PageHeader";

const ProductsContainer = () => {
  // const productList = useSelector(selProductList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncProduct());
  // }, [dispatch]);
  return (

      <div className="h-[600px] overflow-y-auto">
        <div className="grid xl:grid-cols-5 2xl:grid-cols-6 md:grid-cols-3 xs:grid-cols-2 xl:gap-8 gap-5">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
        </div>
      </div>

  );
};

export default ProductsContainer;
