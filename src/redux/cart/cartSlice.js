import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartMedicines: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartMedicines.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartMedicines = state.cartMedicines.filter(
        (item) => item._id !== action.payload._id
      );
    },
    clearCart: (state) => {
      state.cartMedicines = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
