import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./BasketSlice";
import wishlistReducer from "./WishlistSlice";
export const store = configureStore({
  reducer: {
    basket: basketReducer,
    wishlist: wishlistReducer,
  },
});
