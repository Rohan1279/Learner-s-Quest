import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategoriesSidebar from "../Others/CourseCategoriesSidebar";
import image from "../utils/CoursesDetailDefault.gif";
import AllCourses from "./AllCourses";
import CourseDetail from "./CourseDetail";

const Courses = ({ children }) => {
  return (
    <div>
      <p>Courses Page</p>

      <div className="grid grid-cols-12 h-fit">
        <div className="col-span-full lg:col-span-5 ">
          <CourseCategoriesSidebar />
        </div>

        <div className="col-span-full lg:col-span-7 m-2 shadow-2xl broder border-black rounded-xl overflow-hidden">
          {/* <AllCourses /> */}
          {children ? (
            children
          ) : (
            <>
              <div
                className="h-2/3 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="bg-blue-100 h-1/3">
                <h3 className="text-4xl font-bold py-10 ">
                  Course's details will be shown here
                </h3>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
