import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    data: [],
  },
  reducers: {
    setBasket: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setBasket } = basketSlice.actions;
export default basketSlice.reducer
