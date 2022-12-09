import { useSelector } from "react-redux";

export const getTotal = () => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return { totalPrice, totalQuantity };
};
