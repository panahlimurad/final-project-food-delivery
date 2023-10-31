import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS: (state, action) => {
      state.products = action.payload;
    },
    STORE_PRODUCTS_PRICE: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { STORE_PRODUCTS, STORE_PRODUCTS_PRICE } = productSlice.actions;
export const selectProducts = (state) => state.product.products;
export default productSlice.reducer;
