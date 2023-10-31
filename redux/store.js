import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./features/productDetails/productSlice";
export const store = configureStore ({
    reducer: {
        category: categoryReducer,
        
       
    }
})

