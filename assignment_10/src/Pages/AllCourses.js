import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategoriesSidebar from "../Others/CourseCategoriesSidebar";

const AllCourses = () => {
  const avaiavbleCourse = useLoaderData();
  console.log(avaiavbleCourse);
  return (
    <div className="">
  
          <h2 className="text-2xl font-bold">
            Available Courses: {avaiavbleCourse.length}
          </h2>

          <img src={avaiavbleCourse[0]?.img} alt="" />
          {/* <video src={avaiavbleCourse[0]?.video}></video> */}
        </div>
    

  );
};

export default AllCourses;
