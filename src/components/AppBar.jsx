import React, { useEffect } from "react";
// sidebar component
import Sidebar from "./Sidebar";

const AppBar = () => {
  return (
    <>
    {/* simple app bar contain 3 options */}
      <div class="navbar">
        <a  href="#">
          <i class="fa fa-fw fa-home"></i> Home
        </a>
        <a href="#">
          <i class="fa fa-fw fa-search"></i> Search
        </a>
        <a href="#">
          <i class="fa fa-fw fa-envelope"></i> Contact
        </a>

      </div>
      {/* importing sidebar component */}
      <Sidebar />
    </>
  );
};

export default AppBar;
