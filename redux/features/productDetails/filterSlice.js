import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    
   
    SORT_CATEGORY: (state, action) => {
      const { category, products} = action.payload;
      let newProducts = [];
      if (category === "All") {
        newProducts = products;
        state.filteredProducts = products;
      }
      // let s = products.map((item) => item.category);
      // console.log(s, category);
      // newProducts = products.filter((item) => item.category === category);
      // state.filteredProducts = newProducts;
    },
    
    
    GET_CATEGORIES: (state, action) => {
      state.filteredProducts = action.payload;
    },
  },
});
export const selectFilteredProducts = (state) => state.filter.filteredProducts;
export const {
  SORT_CATEGORY,
  GET_CATEGORIES,
} = filterSlice.actions;

export default filterSlice.reducer;
