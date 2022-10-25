import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CourseCategoriesSidebar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://learners-quest.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="min-h-screen m-2  shadow-2xl border border-white shadow-red-400 rounded-xl text-left p-5">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Courses</h2>
        <span>🔍</span>
      </div>
      {categories.map((category) => (
        <div key={category.id}>
          <Link  to={`/courses/${category.id}`}>
            <div className="flex justify-center items-center border border-white my-2 rounded-lg py-2">
              <div className="w-1/3 ">
                <img src={category.img} alt="" className="rounded-lg" />
              </div>
              <div className="w-2/3 mx-2">
                <h2 className="text-lg">{category.category_name}</h2>
                <p className="text-sm leading-none">{category.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CourseCategoriesSidebar;
