import React from "react";

const AppBar = () => {
  return (
    <>
      {/* simple app bar contain 3 options */}
      <div className="navbar">
        <div>
          {/* company logo */}
          <img
            src="https://oyesters.in/wp-content/uploads/2020/06/webhost-225by60.png"
            alt="logo"
            height="30px"
            width="110px"
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
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt="profile"
          />
        </div>
      </div>
    </>
  );
};

export default AppBar;
