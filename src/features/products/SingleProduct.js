import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SingleProduct() {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="my-5 ml-40 w-28 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-blue-500 hover:bg-blue-700"
      >
        {"<<"} Go Back
      </button>

      {products.view.length > 0 ? (
        <div className="w-9/12  px-10 py-10 flex justify-center items-center bg-gray-50 border-2 border-gray-300 rounded-2xl margin ml-auto mt-0 mb-10 mr-auto">
          {products.view.map((prod) => (
            <div className=" w-full h-full flex  justify-between  gap-10 px-10 py-10">
              <div className="flex flex-col justify-center items-center gap-10">
                <img
                  src={prod.image}
                  className="mix-blend-darken w-96"
                  alt="singleProduct"
                />
              </div>
              <div className="flex flex-col justify-center gap-3">
                <p className="font-bold text-3xl">{prod.title}</p>
                <p className="text-red-600 font-bold text-2xl">
                  Price : ${prod.price}
                </p>
                <p className="text-gray-700">{prod.description}</p>
                <p>
                  <b>Category:</b> {prod.category}
                </p>
                <p>
                  <b>Rating:</b> {prod.rating.rate}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-red-600 font-bold text-center">
          No Product to display !!!
        </p>
      )}
    </>
  );
}

export default SingleProduct;
