import React, { useEffect } from "react";
import addNotification from "react-push-notification";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { useGlobalContext } from "../../context/globalContext";
import { Card, Typography } from "@mui/material";

const PushNotificationExample = () => {
  // global function
  const { setAlert } = useGlobalContext();
  // notification fucntion after click
  const buttonClick = () => {
    addNotification({
      title: "Warning",
      subtitle: "This is a subtitle",
      message: "Hello From Arash",
      theme: "darkblue",
      //   function after click on notification
      onClick: () => {
        console.log("Push notification clicked!");
      },
      native: true, // when using native, your OS will handle theming.
    });
  };

  //   useEffect for displaying Notification after visiting page
  useEffect(() => {
    addNotification({
      title: "Welcome!",
      message: "Thanks for visiting our site.",
      theme: "red",
      native: true,
    });
  }, []);

  //function to handle alert
  const handleButtonClick = (severity) => {
    setAlert({
      flag: true,
      type: severity,
      msg: "This is sample message",
    });
  };

  return (
    <>
      {/* // card component from mui */}
      <Card className="global_card" style={{ padding: "10px" }}>
        <div>
          <h1>Welcome to our site!</h1>
          <Typography>Thank you for visiting.</Typography>
          {/* button to trigger notification  */}
          <button
            className="btn_primary btn_primary_hover"
            size="small"
            style={{
              marginTop: "10px",
              color: "white",
              width: "15%",
            }}
            onClick={buttonClick}
          >
            Trigger Notification
          </button>

        </div>
      </Card>
      <Card
        className="global_card"
        style={{ padding: "20px", marginTop: "20px" }}
      >
        <h1>All Alert Example</h1>
        <Typography> &nbsp;</Typography>
        <Grid container spacing={2}>
          <Grid item xs={3} md={3} lg={3}>
            <button
              className="btn_primary btn_primary_hover"
              style={{
                color: "white",
              }}
              color="success"
              variant="contained"
              onClick={() => handleButtonClick("success")}
            >
              Success Alert
            </button>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            {" "}
            <button
              className="btn_primary btn_primary_hover"
              style={{
                color: "white",
              }}
              color="info"
              variant="contained"
              onClick={() => handleButtonClick("info")}
            >
              Info Alert
            </button>
          </Grid>

          <Grid item xs={3} md={3} lg={3}>
            {" "}
            <button
              className="btn_primary btn_primary_hover"
              style={{
                color: "white",
              }}
              onClick={() => handleButtonClick("warning")}
            >
              Warning Alert
            </button>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            {" "}
            <button
              className="btn_primary btn_primary_hover"
              style={{
                color: "white",
              }}
              variant="contained"
              onClick={() => handleButtonClick("error")}
            >
              Error Alert
            </button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PushNotificationExample;


