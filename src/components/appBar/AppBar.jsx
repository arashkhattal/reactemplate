import React, { useState } from "react";

// css file for appbar
import "./AppBar.css";

//global context
import { useGlobalContext } from "../../context/globalContext";

const AppBar = () => {
  // state to maintain search results
  const [search, setSearch] = useState("");

  const { setAlert } = useGlobalContext();

  // funciton for search bar
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setAlert({
      flag: true,
      type: "success",
      msg: search,
    });
  };

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
          <input
            type="search"
            placeholder="Search.."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch(e);
              }
            }}
          />
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
