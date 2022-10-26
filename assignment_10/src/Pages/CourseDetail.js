import React from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
// import image from "../utils/CoursesDetailDefault.gif";
const CourseDetail = () => {
  const courseData = useLoaderData();
  // console.log(courseData);
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
    video,
  } = courseData;
  return (
    <div className="h-screen m-2  shadow-2xl rounded-xl  overflow-hidden">
      <h2 className="text-3xl font-bold text-left">{name}</h2>
      <img src={img} alt="" />
    </div>
  );
};

// {/* <video controls autoPlay="on">
//   <source src="https://muniruddinrohan3.wistia.com/medias/dtgb7navk7" type="video/mp4" />
//   Sorry, your browser doesn't support videos.
// </video> */}
export default CourseDetail;
