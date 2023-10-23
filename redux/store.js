import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productDetails/productSlice";

export const store = configureStore ({
    reducer: {
        product: productReducer
    }
})