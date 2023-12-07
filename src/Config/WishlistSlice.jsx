import { createSlice, current } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  wishlist: user ? user.wishlist : [],
};

const WishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    handleWishlist: (state, action) => {
      const existingItemIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (existingItemIndex !== -1) {
        // state.wishlist.splice(existingItemIndex, 1);
        state.wishlist = state.wishlist.filter(
          (item) => item.id !== action.payload?.id
        );
      } else {
        state.wishlist.push(action.payload);
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, wishlist: state.wishlist })
      );
    },

    removeFromWishlist: (state, action) => {
      console.log("action.payload:", action.payload);
      console.log("state:", current(state.wishlist));
      const idToRemove = action.payload?.products?.id;

      console.log("idToRemove:", idToRemove);

      if (idToRemove) {
        // Find the index of the item with the matching id in the wishlist
        const indexToRemove = state.wishlist.findIndex(
          (item) => item.id === idToRemove
        );
        console.log(state.wishlist);
        // If the item is found, remove it using splice
        if (indexToRemove !== -1) {
          state.wishlist.splice(indexToRemove, 1);
        } else {
          console.warn("Item not found in wishlist.");
        }

        // Update localStorage with the modified wishlist
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, wishlist: state.wishlist })
        );
      } else {
        console.error("Cannot remove item from wishlist. ID is undefined.");
      }
    },
  },
});

export const { handleWishlist, removeFromWishlist } = WishlistSlice.actions;

export default WishlistSlice.reducer;
