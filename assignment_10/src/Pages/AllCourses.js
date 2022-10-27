import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCategoriesSidebar from "../Others/CourseCategoriesSidebar";
import { HiLink, HiStar } from "react-icons/hi";
const AllCourses = () => {
  const availableCourses = useLoaderData();
  // console.log(availableCourses[0].id);
  return (
    <div className="bg-[#f5ebe0] lg:h-fit shadow-2xl rounded-xl text-left p-5">
      <h2 className="text-3xl font-bold text-center lg:text-left mb-4">
        Available Courses: {availableCourses.length}
      </h2>
      <div className="">
        {availableCourses.map((availableCourse) => (
          <div key={availableCourse.id}>
            <img
              src={availableCourse.img}
              alt=""
              className="rounded-xl
            "
            />
            <div className="">
              <div className="flex items-center text-lg">
                <>
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar />
                  <HiStar className="text-gray-500" />
                </>
                <p className=" font-extrabold ml-3">
                  {availableCourse.ratings}{" "}
                </p>
                <p className="text-gray-500 text-sm ml-2">
                  ({availableCourse.reviewsCount})
                </p>
                <Link
                  to={`/course/${availableCourse.id}`}
                  className="link link-hover text-blue-600 ml-auto "
                >
                  Checkout this course🔗
                </Link>
              </div>
              <h3 className="text-2xl font-bold">{availableCourse.name}</h3>
              <p className="text-justify">
                {availableCourse.description}{" "}
                
              </p>
            </div>
            <div className=" my-4 lg:flex justify-between items-center">
              <div className="lg:flex bg-[#fac9a1] p-2 rounded-lg my-2 lg:my-0 shadow-lg">
                <img
                  src={availableCourse.instructor_img}
                  alt=""
                  className="w-14 h-14 rounded-full mx-auto"
                />
                <div className="text-lg mx-3 leading-snug text-center lg:text-left">
                  <p className="font-bold ">
                    {availableCourse.instructor_name}
                  </p>
                  <p className="text-gray-500">
                    {availableCourse.instructor_designation}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-2xl text-white font-extrabold bg-[#400f29] px-7 py-2 rounded-md text-center">
                  $ {availableCourse.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
