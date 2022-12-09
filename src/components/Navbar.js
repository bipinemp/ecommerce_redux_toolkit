import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <ul className="flex  gap-5 px-10 py-4">
      <li className="cursor-pointer hover:text-blue-200 ease-linear duration-150">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-200" : undefined)}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="cursor-pointer hover:text-blue-200 ease-linear duration-150">
        <NavLink
          className={({ isActive }) => (isActive ? "text-blue-200" : undefined)}
          to="/cart"
        >
          Cart({cart.cart.length})
        </NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
