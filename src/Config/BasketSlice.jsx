import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { json } from "react-router-dom";
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
      let userr = {
        username: user.username,
        password: user.password,
        orders: user.orders,
        wishlist: user.wishlist,
        basket: state.basket,
        id: user.id,
      };

      localStorage.setItem(
        "user",
        JSON.stringify({ ...user, basket: state.basket })
      );
      axios.put(
        `   http://localhost:3000/users/${user.id}`,
        JSON.stringify(userr)
      );
    },
    handleCheckout: (state, actions) => {
      const userr = JSON.parse(localStorage.getItem("user"));
      const userBasket = userr.basket;
      userr.basket = [];
      if (userBasket.length > 0) {
        userr.orders = [...userr.orders, ...userBasket];
        let subTotal = 0;

        userBasket.map((x) => {
          subTotal += x.count * x.products.price;
        });
        // console.log(subTotal);
        // var balanceAsNumber = parseFloat(user.balance);
        // console.log(balanceAsNumber);
        userr.balance -= subTotal;
        // console.log(balanceAsNumber);
      }
      // userr.balance = balanceAsNumber;
      const myOrder = {
        username: userr.username,
        password: userr.password,
        basket: userr.basket,
        orders: userBasket,
        balance: userr.balance,
      };
      localStorage.setItem("user", JSON.stringify(userr));
      axios.put(
        `http://localhost:3000/users/${userr.id}`,
        JSON.stringify(myOrder)
      );

      state.basket = [];
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
  handleCheckout,
} = BasketSlice.actions;

export default BasketSlice.reducer;
