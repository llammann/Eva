import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  basket: user ? user.basket : [],
};

const BasketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    handleBasket: (state, actions) => {
      // let arr = [...user.basket];

      // console.log(actions.payload);
      // console.log("user", user);
      // console.log("user basket", user.basket);

      // let user = JSON.parse(localStorage.getItem("user"));
      if (state.basket.some((x) => x.products.id === actions.payload.id)) {
        state.basket.forEach((elem) => {
          if (elem.products.id === actions.payload.id) {
            elem.count += 1;
            // console.log(arr.elem)
            // let quantity = elem.basket;
            // quantity=quantity+1
            // arr.push({ count: quantity, products: actions.payload });
          }
        });
      } else {
        state.basket.push({ count: 1, products: actions.payload });
      }

      // user.basket = arr;

      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, basket: state.basket })
      );
    },

    handleMinus: (state, actions) => {
      console.log("Handling Minus");

      const existingItem = state.basket.find(
        (item) => item.products.id === actions.payload.products.id
      );

      if (existingItem && existingItem.count > 1) {
        existingItem.count -= 1;
      } else {
        // Remove the item from the basket if count is 1 or less
        state.basket = state.basket.filter(
          (item) => item.products.id !== actions.payload.products.id
        );
      }

      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, basket: state.basket })
      );
    },

    handlePlus: (state, actions) => {
      console.log("Handling Plus");

      const existingItem = state.basket.find(
        (item) => item.products.id === actions.payload.products.id
      );

      if (existingItem) {
        existingItem.count += 1;
      }
      console.log(state.basket);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, basket: state.basket })
      );
    },

    removeFromBasket: (state, actions) => {
      console.log("buraa", actions.payload.products.id);
      // gives the id that i want
      const productIdToRemove = actions.payload.products.id;

      // Remove

      state.basket = state.basket.filter(
        (item) => item.products.id !== productIdToRemove
      );
      console.log("after remove", state.basket);
      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, basket: state.basket })
      );
    },

    // updateBasket: (state, actions) => {
    //   const MyBasket = JSON.parse(localStorage.getItem("basket"));
    //   console.log("Bassss", MyBasket);
    //   state.basket = MyBasket || [];
    // },
  },
});

export const {
  handleBasket,
  handleMinus,
  handlePlus,
  updateBasket,
  removeFromBasket,
} = BasketSlice.actions;

export default BasketSlice.reducer;
