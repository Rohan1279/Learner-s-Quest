import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategoriesSidebar from "../Others/CourseCategoriesSidebar";
import image from "../utils/CoursesDetailDefault.gif";
import AllCourses from "./AllCourses";
import CoursesDetail from "./CourseDetail";

const Courses = ({ children }) => {
  return (
    <div>
      <p>Courses Page</p>

      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <CourseCategoriesSidebar />
        </div>

        <div className="col-span-7  bg-red-500 m-2 shadow-2xl  shadow-red-400 rounded-xl overflow-hidden">
          {/* <AllCourses /> */}
          {children ? (
            children
          ) : (
            <>
              <div
                className="h-2/3 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              ></div>
              <div className="bg-green-400 h-1/3">
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
