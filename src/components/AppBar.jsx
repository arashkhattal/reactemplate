import React, { useEffect } from "react";
// sidebar component
import Sidebar from "./Sidebar";

const AppBar = () => {
  return (
    <>
      {/* simple app bar contain 3 options */}
      <div className="navbar">
        <div>
          {/* company logo */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTqx7NEgSZ2njWhxj6WhIXrW3isjUUwxJTg&usqp=CAU"
            alt="logo"
            height="30px"
            width="70px"
          />
        </div>
        <div className="search">
          {/* search bar */}
          <input type="search" placeholder="Search.." name="search" />
        </div>
        <div>
          {/* profile img */}
          <img
            className="profile"
            src="data:image/jpeg;base64,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"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
};

export default AppBar;
