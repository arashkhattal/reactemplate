import React, { useEffect } from "react";
import addNotification from "react-push-notification";
import { Card } from "@material-ui/core";
import { Typography } from "@mui/material";

const PushNotificationExample = () => {
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

  return (
    <Card style={{ padding: "20px", margin: "20px" }}>
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
  );
};

export default PushNotificationExample;
