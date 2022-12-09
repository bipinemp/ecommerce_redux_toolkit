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
        className="my-5 ml-40 sm:ml-32 w-28 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white bg-blue-500 hover:bg-blue-700 "
      >
        {"<<"} Go Back
      </button>

      {products.view.length > 0 ? (
        <div className="w-9/12 sm:w-fit sm:m-4 px-10 py-10 md:px-2 md:py-2 flex justify-center items-center bg-gray-50 border-2 border-gray-300 rounded-2xl  ml-auto mt-0 mb-10 mr-auto">
          {products.view.map((prod) => (
            <div className="md:flex-col w-full h-full flex  justify-between  gap-10 px-10 py-10 md:px-0 md:py-0">
              <div className="flex flex-col justify-center items-center gap-10">
                <img
                  src={prod.image}
                  className="mix-blend-darken w-96 md:w-32"
                  alt="singleProduct"
                />
              </div>
              <div className="flex flex-col justify-center gap-3 ">
                <p className="font-bold text-3xl md:text-xl md:text-center ">
                  {prod.title}
                </p>
                <p className="text-red-600 font-bold text-2xl md:text-center">
                  Price : ${prod.price}
                </p>
                <p className="text-gray-700 md:text-center">
                  {prod.description}
                </p>
                <p className="md:text-center">
                  <b>Category :</b> <br />
                  {prod.category}
                </p>
                <p className="md:text-center">
                  <b>Rating :</b> <br />
                  {prod.rating.rate}
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
