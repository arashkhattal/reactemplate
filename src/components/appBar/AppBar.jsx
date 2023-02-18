import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

// css file for appbar
import "./AppBar.css";

//global context
import { useGlobalContext } from "../../context/globalContext";
import { Box, Menu, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const AppBar = () => {
  // state to maintain search results
  const [search, setSearch] = useState("");

  // global context
  const { setAlert, openMenu, setOpenMenu } = useGlobalContext();

  // funciton for search bar
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setAlert({
      flag: true,
      type: "success",
      msg: search,
    });
  };

  //to navigate to another page
  const navigate = useNavigate();

  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const handleOpenProfileMenu = (event) =>
    setOpenProfileMenu(event.currentTarget);
  const handleCloseProfileMenu = () => setOpenProfileMenu(false);

  const renderProfile = () => (
    <Menu
      anchorEl={openProfileMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openProfileMenu)}
      onClose={handleCloseProfileMenu}
      sx={{ mt: 2, borderRadius: "20px" }}
    >
      <Box
        sx={{
          // height: "480px",
          width: "150px",
          border: "1px solid #e3e3e3",
          margin: "-8px",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Box
          sx={{
            margin: "10px",
            cursor: "pointer",
            border: "1px solid #dbdbdb",
            padding: "10px",
            borderRadius: "10px",
            fontSize: "14px",
            color: "#414548",
          }}
          // onClick={navigate("/")}
        >
          <Typography className="fs_12" style={{ textAlign: "center" }}>
            Log Out
          </Typography>
        </Box>
      </Box>
    </Menu>
  );

  return (
    <>
      {/* simple app bar contain 3 options */}
      <div className="navbar">
        <div className="logo-openMenu">
          {/* company logo */}
          <img
            src="https://oyesters.in/wp-content/uploads/2020/06/webhost-225by60.png"
            alt="logo"
            height="30px"
            width="110px"
          />

          {/* option to close or open menu  */}
          <div onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <MenuOpenIcon /> : <MenuIcon />}
          </div>
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
            onClick={handleOpenProfileMenu}
            className="profile"
            src="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
            alt="profile"
          />
        </div>
        {renderProfile()}
      </div>
    </>
  );
};

export default AppBar;
