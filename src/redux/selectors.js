export const selectMedicines = (state) => state.catalog.medicines;
export const selectShops = (state) => state.catalog.shops;
export const selectIsLoading = (state) => state.catalog.isLoading;
export const selectError = (state) => state.catalog.error;

export const selectCartMedicines = (state) => state.cart.cartMedicines;
