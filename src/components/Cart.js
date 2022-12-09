import React from "react";
import CartView from "../features/cart/CartView";

function Cart() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold  py-5">Cart:</h1>
      <CartView />
    </div>
  );
}

export default Cart;
