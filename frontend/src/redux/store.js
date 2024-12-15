import { configureStore } from "@reduxjs/toolkit";
import createReducer from "../redux/feature/cart/cartSlice"

export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});
