import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productsSlice";
import cartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
