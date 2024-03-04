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
    updateQuantity: (state, action) => {
      const { _id, quantity } = action.payload;
      const medicineToUpdate = state.cartMedicines.find(
        (item) => item._id === _id
      );
      if (medicineToUpdate) {
        medicineToUpdate.amount = quantity;
      }
    },
    clearCart: (state) => {
      state.cartMedicines = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
