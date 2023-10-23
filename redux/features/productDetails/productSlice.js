import { createSlice } from "@reduxjs/toolkit";

const initialState={
   value: 45
 }

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
        state.value -= 1
      },
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
