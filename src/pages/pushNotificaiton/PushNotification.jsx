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
            onClick={buttonClick}
            style={{
              padding: "5px",
              margin: "5px",
              background: "black",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
            }}
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
            <Button
              color="success"
              variant="contained"
              onClick={() => handleButtonClick("success")}
            >
              Success Alert
            </Button>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            {" "}
            <Button
              color="info"
              variant="contained"
              onClick={() => handleButtonClick("info")}
            >
              Info Alert
            </Button>
          </Grid>

          <Grid item xs={3} md={3} lg={3}>
            {" "}
            <Button
              color="warning"
              variant="contained"
              onClick={() => handleButtonClick("warning")}
            >
              Warning Alert
            </Button>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            {" "}
            <Button
              color="error"
              variant="contained"
              onClick={() => handleButtonClick("error")}
            >
              Error Alert
            </Button>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default PushNotificationExample;


