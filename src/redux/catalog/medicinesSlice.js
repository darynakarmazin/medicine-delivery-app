import { createSlice } from "@reduxjs/toolkit";
import { setMedicines, setShops } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const medicinesSlice = createSlice({
  name: "catalog",
  initialState: {
    medicines: [],
    shops: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(setMedicines.pending, handlePending)
      .addCase(setMedicines.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.medicines = [...action.payload];
      })
      .addCase(setMedicines.rejected, handleRejected)
      .addCase(setShops.pending, handlePending)
      .addCase(setShops.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.shops = [...action.payload];
      })
      .addCase(setShops.rejected, handleRejected);
  },
});

export default medicinesSlice.reducer;
