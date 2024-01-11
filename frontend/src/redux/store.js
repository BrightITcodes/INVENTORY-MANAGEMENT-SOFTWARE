import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/features/auth/authorSlice"
import productReducer from "../redux/features/product/productSlice";
import filterReducer from "../redux/features/product/filterSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    filter: filterReducer,
  },
});
// import authReducer from "../redux/features/auth/authSlice";