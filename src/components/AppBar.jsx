import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import "./HomePage.css";

const AppBar = () => {
  return (
    <>
      <div class="navbar">
        <a class="active" href="#">
          <i class="fa fa-fw fa-home"></i> Home
        </a>
        <a href="#">
          <i class="fa fa-fw fa-search"></i> Search
        </a>
        <a href="#">
          <i class="fa fa-fw fa-envelope"></i> Contact
        </a>

      </div>
      <Sidebar />
    </>
  );
};

export default AppBar;
