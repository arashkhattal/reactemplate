import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";
import "./HomePage.css";

const HomePage = () => {
  const { loading, setLoading, alert, setAlert } = useGlobalContext();
  //   setTimeout(setLoading(true), 3000);
  // setTimeout(setLoading(true), 1000);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 4000);

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
        <a href="#">
          <i class="fa fa-fw fa-user"></i> Login
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h2">Home Page</Typography>
      </div>
    </>
  );
};

export default HomePage;
