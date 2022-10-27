import React from "react";
import { useState } from "react";
import { HiClock, HiDownload, HiFolder, HiSupport } from "react-icons/hi";
import { GiDiamondTrophy, GiTargetPrize } from "react-icons/gi";
import { Link, Navigate, useLoaderData } from "react-router-dom";
// import image from "../utils/CoursesDetailDefault.gif";
const CourseDetail = () => {
  const courseData = useLoaderData();
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
  } = courseData;
  return (
    <div className="h-fit m-2 ">
      <header className="grid grid-cols-10 items-center px-5 shadow-lg rounded-xl bg-[#f5ebe0]">
        <div className="col-span-full lg:col-span-4  p-0">
          <img src={img} alt="" className="w-full rounded-xl" />
        </div>
        <div className="col-span-full h-[600px] lg:h-auto lg:col-span-6 flex flex-col gap-y-4 p-3">
          <h2 className="lg:text-left text-3xl font-bold">{name}</h2>
          <div className="lg:text-left my-3">
            <span className="badge badge-success badge-lg mx-1 my-1">
              Rating: <span className="font-bold mx-1">{ratings}</span>
            </span>
            <span className="badge badge-info badge-lg mx-1 my-1">
              Reviews: <span className="font-bold mx-1">{reviewsCount}</span>
            </span>
            <span className="badge badge- badge-lg mx-1 my-1">
              <span className="font-bold mx-1">{students}</span> students
            </span>
          </div>
          <div className="flex flex-col w-full lg:flex-row justify-between items-center">
            <div className="">
              <p className="underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400 lg:text-left mb-4 text-lg">
                Created by
              </p>
              <div className=" flex text-left items-center bg-yellow-400 w-80 p-2 rounded-xl">
                <img
                  src={instructor_img}
                  alt=""
                  className="w-14 h-14 rounded-full"
                />
                <div className=" mx-3 leading-snug">
                  <p className="font-bold ">{instructor_name}</p>
                  <p className="">{instructor_designation}</p>
                </div>
              </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className="w-64">
              <h3 className="lg:text-right underline underline-offset-4 decoration-sky-600 hover:decoration-blue-400  mb-4 text-lg">
                Tags:
              </h3>
              <div className="bg-teal-300 px-3 py-1 rounded-lg">
                <p className="badge lg:block lg:ml-auto my-2">{category}</p>
                <p className="badge lg:block lg:ml-auto my-2">Bestseller</p>
                <p className="badge lg:block lg:ml-auto my-2">Premium Course</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="my-3 lg:grid lg:grid-cols-8 p-5 rounded-xl bg-[#f7ede2]">
        <div className="lg:col-span-5  lg:text-left px-5 py-3">
          <h3 className=" text-3xl font-bold">Course description</h3>
          <p className="text-lg leading-snug my-5 lg:mr-24">{description}</p>
        </div>
        <div className="lg:col-span-3  text-left">
          <h4 className="text-center lg:text-center text-3xl font-bold">
            This course contains:
          </h4>
          <div className="bg-[#e3d5ca] w-3/5  mx-auto my-5 px-3 py-5 rounded-xl">
            <div>
              <p className="text-lg">
                <HiClock className="inline " /> {time_period} hours on-demand
                video
              </p>
              <p className="text-lg">
                <HiFolder className="inline " /> 5 articles
              </p>
              <p className="text-lg">
                <HiDownload className="inline " /> 120 downloadable resources
              </p>
              <p className="text-lg">
                <HiSupport className="inline " /> Full lifetime access
              </p>
              <p className="text-lg">
                <GiTargetPrize className="inline " /> Certificate of completion
              </p>
              <Link to={`/checkout/${id}`}>
                <button className="btn btn-outline w-full mx-auto my-3 ">
                  <GiDiamondTrophy className="text-xl mx-2 text-amber-500" />{" "}
                  Get Premium access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// {/* <video controls autoPlay="on">
//   <source src="https://muniruddinrohan3.wistia.com/medias/dtgb7navk7" type="video/mp4" />
//   Sorry, your browser doesn't support videos.
// </video> */}
export default CourseDetail;
