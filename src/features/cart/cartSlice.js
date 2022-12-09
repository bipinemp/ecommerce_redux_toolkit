import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  singleItem: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      var productInCart = state.cart.find(
        (prod) => prod.id === action.payload.id
      );
      if (productInCart) {
        productInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    incQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const updatedCart = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = updatedCart;
    },
    getTotal: (state) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem;
          const itemTotal = price * quantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += quantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  clearCart,
  incQuantity,
  decQuantity,
  removeFromCart,
  getTotal,
} = cartSlice.actions;
