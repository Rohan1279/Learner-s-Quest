import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const checkOutCourse = useLoaderData();
  //   console.log(checkOutCourse);
  const {
    category,
    id,
    description,
    img,
    instructor_designation,
    instructor_img,
    instructor_name,
    name,
    price,
    ratings,
    reviewsCount,
    students,
    time_period,
    video,
  } = checkOutCourse;
  return (
    <div>
      <h2>Checkout Page</h2>
      <div
        className="flex flex-col items-center justify-center w-full max-w-lg mx-auto bg-center	"
        // style={{ backgroundImage: `url(${image})` }}
      >
        <div
          className="w-full h-72 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
          style={{ backgroundImage: `url(${img}) ` }}
        ></div>

        <div class="w-96 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-80 dark:bg-gray-800 ">
          <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
            {name}
          </h3>

          <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
            <span class="font-bold text-gray-800 dark:text-gray-200">${price}</span>
            <button 
            onClick={()=>toast.success("Added to cart successfully")}
             class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
