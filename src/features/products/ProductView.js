import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, viewProduct, category, search } from "./productsSlice";
import { addToCart } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";

function ProductView() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleOption = (val) => {
    dispatch(category(val));
  };

  const handleSearch = (val) => {
    dispatch(search(val));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold tracking-wider  my-4">
        Products:
      </h1>
      <div className="text-center flex justify-center gap-5 sm:flex-col sm:mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-gray-500 px-2 py-2 rounded-lg"
          onChange={(e) => handleSearch(e.target.value.toLowerCase())}
        />
        <select
          name="category"
          className="border-2 border-gray-500 py-2 px-2 rounded-lg"
          onChange={(e) => handleOption(e.target.value)}
        >
          <option value="all">All</option>
          <option value="jewelery">jewelery</option>
          <option value="men's clothing">men's clothing</option>
          <option value="women's clothing">women's clothing</option>
          <option value="electronics">electronics</option>
        </select>
      </div>

      {products.loading && (
        <p className="text-center font-bold text-red-600">Loading...</p>
      )}
      {products.error && (
        <p className="text-center font-bold text-red-600">{products.error}</p>
      )}

      <div className=" flex justify-center flex-wrap gap-5 px-10 py-4">
        {!products.loading &&
          !products.searchErr &&
          products.filter.map((product) => (
            <div
              className="relative flex flex-col justify-center items-center  gap-3 shadow-xl w-80 h-72 cursor-pointer hover:bg-slate-100"
              key={product.id}
            >
              <div
                onClick={() => {
                  dispatch(viewProduct(product));
                  navigate("/product");
                }}
                className="flex flex-col justify-center items-center gap-4  w-full h-full"
              >
                <img
                  src={product.image}
                  alt="product"
                  className="w-12 mix-blend-darken"
                />
                <p className="text-xs text-center pointer-events-none">
                  {product.title.split(",")}
                </p>
                <p className="text-red-500">${product.price}</p>
              </div>
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  navigate("/cart");
                }}
                className="m-2.5 absolute bottom-2 flex items-center justify-center rounded-md p-2.5 text-white bg-blue-500 hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductView;
