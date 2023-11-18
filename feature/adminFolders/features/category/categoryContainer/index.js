// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import PageHeader from "shared/components/PageHeader";

import CategoryTable from "../CategoryTable";

// import {
//   getAsyncCategory,
//   selCategoryList,
// } from "store/slices/categoriesSlice";
// import { selIsLoading } from "store/slices/restaurantsSlice";
// import CategoryTable from "../CategoryTable";

const CategoryContainer = () => {
  // const categories = useSelector(selCategoryList);
  // const isLoading = useSelector(selIsLoading);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAsyncCategory());
  // }, [dispatch]);
  return (
    <>
    
      <CategoryTable/>
    </>
  );
};

export default CategoryContainer;
