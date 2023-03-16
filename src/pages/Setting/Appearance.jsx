import {
  Button,
  Card,
  Divider,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

const Setting = () => {
  useEffect(() => {
    const color = getComputedStyle(document.documentElement).getPropertyValue(
      "--color_primary"
    );
    console.log(`--color_primary: ${color}`);
  }, []);

  function setColor(color) {
    console.log(`Updating --color_primary to: ${color}`);
    document.documentElement.style.setProperty("--color_primary", color);
  }

  return (
    <div>
      <Card className="global_card">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="baseline"
          pb={0.5}
          px={3}
        >
          <Box>
            <Typography variant="h5">Theme UI Configurator</Typography>
            <Typography variant="body2" color="text">
              See our dashboard options.
            </Typography>
          </Box>
        </Box>
        <Divider sx={{ mx: 2.5, position: "relative", zIndex: "3" }} />
        <Box>
          <Box mb={0.5} mt={3} ml={1}>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#0d80d8",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#0d80d8")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#4E6E81",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                borderRadius: "5px",
                marginLeft: "10px",
              }}
              onClick={() => setColor("#4E6E81")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#4CAF50")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#146C94",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#146C94")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#F7C04A",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#F7C04A")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#609966",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#609966")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#191825",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#191825")}
            ></button>
            <button
              style={{
                width: "60px",
                height: "30px",
                backgroundColor: "#FF0303",
                border: "none",
                color: "white",
                padding: "5px 5px",
                textAlign: "center",
                display: " inline-block",
                fontSize: "16px",
                marginLeft: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setColor("#FF0303")}
            ></button>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Setting;
