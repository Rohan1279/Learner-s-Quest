import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const CourseCategoriesSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://learners-quest.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="min-h-screen m-2  shadow-2xl shadow-red-200 rounded-xl text-left p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Courses</h2>
        <button className="text-lg p-2 rounded-lg shadow-md">
          <HiSearch />
        </button>
      </div>
      {categories.map((category) => (
        <div key={category.id}>
          <NavLink
            to={`/courses/${category.id}`}
            className={({ isActive }) =>
              isActive
                ? "flex text-[#400f29] justify-center  items-center transition-all  my-6 lg:ml-3 rounded-lg p-3 opacity-90  border border-[#c2b5bc] bg-[#f5ebe0]"
                : "flex hover:text-[#400f29] justify-center shadow-md items-center transition-all my-4 rounded-lg lg:p-1 "
            }
          >
            <div className="lg:w-1/3 ">
              <img src={category.img} alt="" className="rounded-lg" />
            </div>
            <div className="w-2/3 mx-2 hidden lg:block">
              <h2 className="text-xl font-semibold">
                {category.category_name}
              </h2>
              <p className="text-sm leading-none">{category.description}</p>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default CourseCategoriesSidebar;
// className="flex justify-center   shadow-lg items-center transition-all  hover:scale-105 active:scale-95 my-4 rounded-lg lg:p-2 "
