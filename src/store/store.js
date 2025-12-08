import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { homeReducer } from "./features/homeSlice/homeSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    homeSlice: homeReducer,
  },
});
