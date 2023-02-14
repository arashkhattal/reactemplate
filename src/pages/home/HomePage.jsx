import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";

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
  );
};

export default HomePage;
