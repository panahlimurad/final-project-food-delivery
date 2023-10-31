import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/productDetails/productSlice";
import userReducer from './features/userDetails/userSlice'
export const store = configureStore ({
    reducer: {
        category: categoryReducer,
        user: userReducer
    }
})

