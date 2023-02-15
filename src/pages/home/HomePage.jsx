import { Card, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/globalContext";

const HomePage = () => {
  const { setLoading } = useGlobalContext();
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
      <Card className="main_content"    >
          <Typography variant="h2">Home Page</Typography>
      </Card>
    </>
  );
};

export default HomePage;
