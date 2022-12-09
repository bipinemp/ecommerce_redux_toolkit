import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  incQuantity,
  decQuantity,
  removeFromCart,
  getTotal,
  clearCart,
} from "../cart/cartSlice";
import { useDispatch } from "react-redux";

function CartView() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  return (
    <div className="flex-col px-10 sm:px-0">
      <p className="text-center text-2xl">
        Total Price :{" "}
        <b className="text-red-600">${cart.cartTotalAmount.toFixed(0)}</b>
      </p>
      {cart.cart.length === 0 && (
        <p className="text-red-500 text-center mt-10 text-2xl font-bold tracking-wide">
          No Items in the cart !!!
        </p>
      )}
      {cart.cart.length > 0 && (
        <div className="flex items-center justify-center mt-4 ">
          <button
            onClick={() => dispatch(clearCart())}
            className="rounded-md p-2.5 text-white bg-red-500 hover:bg-red-700"
          >
            Clear Cart
          </button>
        </div>
      )}
      {cart.cart.map((cart) => (
        <div className="flex justify-between items-center px-5 py-5 m-10 sm:m-5 border-2 border-solid border-gray md:flex-col md:gap-3">
          <img
            src={cart.image}
            alt="cart-product"
            className="w-14"
            loading="lazy"
          />
          <p className=" md:text-center">{cart.title}</p>
          <div className="flex gap-2 w-36">
            <button
              onClick={() => dispatch(incQuantity(cart))}
              className=" inline-flex items-center justify-center rounded-md px-2.5 text-white bg-blue-500 hover:bg-blue-700"
            >
              <span className="pointer-events-none">+</span>
            </button>
            <p className="text-red-600 ">
              {cart.quantity} * ${cart.price.toFixed(0)}
            </p>
            <button
              onClick={() => dispatch(decQuantity(cart))}
              className="inline-flex items-center justify-center rounded-md px-2.5 text-white bg-blue-500 hover:bg-blue-700"
            >
              <span className="pointer-events-none">-</span>
            </button>
          </div>
          <p className="text-red-500">Price: ${cart.price.toFixed(0)}</p>
          <button
            onClick={() => dispatch(removeFromCart(cart))}
            className="m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-red-500 hover:bg-red-700"
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
}

// function getTotal  ()  {
//   let totalQuantity = 0;
//   let totalPrice = 0;
//   cart.forEach((item) => {
//     totalQuantity += item.quantity;
//     totalPrice += item.price * item.quantity;
//   });
//   return { totalPrice, totalQuantity };
// };

export default CartView;
