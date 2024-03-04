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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
