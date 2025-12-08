import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  name: "",
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    handleAddToCart: (state) => {
      console.log(state.name);
    },
  },
});

export const { handleAddToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
