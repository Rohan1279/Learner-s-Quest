import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
