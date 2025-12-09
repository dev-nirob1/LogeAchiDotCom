import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  cart: [],
  quantity: 0,
  price: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    handleAddToCart: (state, {payload}) => {

      const existingItem = state.cart.find(item => item.id == payload.id);
      if(existingItem){
        existingItem.quantity += 1;
      }
     else{
      state.cart.push({...payload, quantity: 1})
    }

    },


    clearCart: (state) => {
      state.cart = [];
      state.totalAmount = 0;
      state.price = 0;
    },
  },
});

export const { handleAddToCart,clearCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
