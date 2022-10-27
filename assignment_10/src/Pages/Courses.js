import React from "react";
import CourseCategoriesSidebar from "../Others/CourseCategoriesSidebar";
import image from "../utils/CoursesDetailDefault.gif";

const Courses = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-full lg:col-span-5 ">
          <CourseCategoriesSidebar />
        </div>

        <div className= "col-span-full max-h-fit lg:col-span-7 m-2  rounded-xl p-4">
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
                <h3 className="text-4xl font-bold py-10">
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
