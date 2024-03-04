import { configureStore } from "@reduxjs/toolkit";
import medicinesReducer from "./catalog/medicinesSlice";

export const store = configureStore({
  reducer: {
    catalog: medicinesReducer,
  },
});
