import React, { useState } from "react";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// css file for appbar
import "./AppBar.css";

//global context
import { useGlobalContext } from "../../context/globalContext";
import { Avatar, Box, Menu, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { USER_SIGNOUT } from "../../redux/constant/AuthConstant";
import EditIcon from "@mui/icons-material/Edit";
import SearchModal from "./SearchModal";

const AppBar = () => {
  const dispatchRedux = useDispatch();

  // state to maintain search results
  const [search, setSearch] = useState("");
  const [userRole, setUserRole] = useState("user");
  // global context
  const { setAlert, openMenu, setOpenMenu } = useGlobalContext();
  // store profile menu

  const [searchModal, setSearchModal] = useState(false);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  // function for search bar
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setAlert({
      flag: true,
      type: "success",
      msg: search,
    });
  };

  const handleclick = () => {};

  //to navigate to another page
  const navigate = useNavigate();
  // logout function
  const handelLogout = () => {
    dispatchRedux({
      type: USER_SIGNOUT,
      isLoggedIn: false,
      // payload: {},
    });
    navigate("/");
  };
  // open profile menu
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
          width: "280px",
          border: "1px solid #e3e3e3",
          margin: "-8px",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid lightgrey",
          }}
        >
          {userRole === "user" ? (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                {" "}
                <Box
                  // className="border-gradient-rounded"
                  sx={{
                    width: "90px",
                    height: "90px",
                    fontSize: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#e3e3e3",
                    position: "relative",
                  }}
                >
                  <img
                    alt=""
                    src="https://t4.ftcdn.net/jpg/03/46/93/61/360_F_346936114_RaxE6OQogebgAWTalE1myseY1Hbb5qPM.jpg"
                    style={{
                      position: "absolute",
                      padding: "2px",
                      width: "90px",
                      height: "90px",
                      fontSize: " 50px",
                      borderRadius: "50%",
                    }}
                  ></img>
                  <Box>
                    <Link to="/profile">
                      <EditIcon
                        sx={{
                          position: "absolute",
                          marginTop: "60px",
                          marginLeft: "60px",
                          color: "#595959",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#ffff",
                          border: "1px solid #e3e3e3",
                          padding: "5px",
                          borderRadius: "50%",
                          cursor: "pointer",
                        }}
                        onClick={() => setOpenProfileMenu(false)}
                      />
                    </Link>
                  </Box>
                </Box>
              </div>
              <Typography
                sx={{
                  fontSize: "16px",
                  textAlign: "center",
                  fontWeight: 600,
                  marginTop: "5px",
                  color: "#313235",
                }}
              >
                user
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  textAlign: "center",
                  fontWeight: "light",
                  color: "gray",
                  marginBottom: "5px",
                }}
              >
                demo@gmail.com
              </Typography>
            </>
          ) : null}
        </div>

        <>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: 700,
              textAlign: "center",
              marginTop: "10px",
              cursor: "pointer",
            }}
          >
            Switch Dashboard
          </Typography>
        </>
        <div
          style={{
            padding: "5px 5px",
            borderBottom: "1px solid lightgrey",
          }}
        >
          {!userRole === "user" ? (
            <>
              <Box
                sx={{
                  margin: "0 15px",
                  cursor: "pointer",
                }}
              >
                <Box
                  className="user-hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "10px 20px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={<PermIdentityIcon />}
                    sx={{
                      height: "35px",
                      width: "35px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      User
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          ) : (
            <>
              <Box
                sx={{
                  margin: "0 15px",
                  cursor: "pointer",
                }}
              >
                <Box
                  className="user-hover"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "10px 20px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={<PermIdentityIcon />}
                    sx={{
                      height: "35px",
                      width: "35px",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      Customer Admin
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ padding: "10px 0px" }}>
            {/* <Link to="/"> */}
            <button
              className="btn_primary btn_primary_hover"
              style={{ color: "white" }}
              onClick={handelLogout}
            >
              Log Out
            </button>
            {/* </Link> */}
          </div>
        </Box>
      </Box>
    </Menu>
  );

  return (
    <>
      <SearchModal searchModal={searchModal} setSearchModal={setSearchModal} />
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
          <div
            style={{ cursor: "pointer" }}
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <MenuOpenIcon /> : <MenuIcon />}
          </div>
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Search.."
            name="search"
            onClick={() => setSearchModal(true)}
            style={{ cursor: "pointer" }}
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter") {
            //     handleSearch(e);
            //   }
            // }}
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
