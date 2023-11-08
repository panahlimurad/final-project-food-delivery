import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./app/features/productDetails/productSlice";
import userReducer from "./app/features/userDetails/userSlice";
import basketReducer from "./app/features/basketDetails/basketSlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    user: userReducer,
    basket: basketReducer,
  },
});
