import { configureStore } from "@reduxjs/toolkit";
import medicinesReducer from "./catalog/medicinesSlice";
import cartReducer from "./cart/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const cartPersistConfig = {
  key: "cartMedicines",
  storage,
  whitelist: ["cartMedicines"],
};

const persistedUserReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    catalog: medicinesReducer,
    cart: persistedUserReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        ignoredPaths: ["transactions.date"],
      },
    }),
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
