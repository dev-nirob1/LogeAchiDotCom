import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  cart: [],
  quantity: 1,
  price: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    handleAddToCart: (state, {payload}) => {
      state.cart.push(payload)
    },
    updateQuantity: (state, { payload }) => {
      state.quantity = state.quantity + payload;
    },
    updatePrice: (state, { payload }) => {
      // quantity from payload
      state.price = state.price * payload;
    },
    updateTotalPrice: (state, { payload }) => {
      // delivery charge from payload
      state.totalAmount = state.price + payload;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.price = 0;
    },
  },
});

export const { handleAddToCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
