import React from "react";
import CourseCategoriesSidebar from "../Others/CourseCategoriesSidebar";
import CoursesDetail from "./CoursesDetail";

const Courses = () => {
  return (
    <div>
      <p>Courses Page</p>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <CourseCategoriesSidebar />
        </div>
        <div className="col-span-7">
          <CoursesDetail />
        </div>
      </div>
    </div>
  );
};

export default Courses;
