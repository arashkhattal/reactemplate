import {
  Button,
  Card,
  Divider,
  Icon,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/globalContext";
import {hexToRgba} from "../../../src/helpers/globalFunction"

const Setting = () => {
  //light - dark mode
  const { isDarkMode, setIsDarkMode } = useGlobalContext();

  const handleToggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  //  const { setColor, themeColor, setThemeColor } = useGlobalContext();
  // const [themeColor, setThemeColor] = useState("#0d80d8");

  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor") || "#0d80d8"
  );

  useEffect(() => {
    setColor(themeColor);
  }, []);


  function setColor(themeColor) {
    const secondaryColor = hexToRgba(themeColor, 0.203);
    document.documentElement.style.setProperty("--color_primary", themeColor);
    document.documentElement.style.setProperty(
      "--color_secondary",
      secondaryColor
    );
    localStorage.setItem("themeColor", themeColor);
  }

  //to handle toggler
  const handleToggleChange = (event) => {
    setChecked(event.target.checked);
  };

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

        <Box sx={{ mx: 3 }}>
          <Box mb={0.5} mt={3} ml={1}>
            <Typography
              variant="body1"
              color="text"
              style={{ padding: "10px 10px 10px 0px" }}
            >
              Pick a default color
            </Typography>
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
            <div>
              <Typography
                variant="body1"
                color="text"
                style={{ padding: "10px 10px 10px 0px" }}
              >
                Choose custom color
              </Typography>
              <Icon fontSize="small" style={{ margin: "0px 6px 3px 0px" }}>
                edit
              </Icon>
              <input
                style={{ cursor: "pointer", borderRadius: "5px" }}
                type="color"
                id="head"
                name="head"
                value={themeColor}
                onChange={(e) => {
                  setThemeColor(e.target.value);
                  setColor(e.target.value);
                }}
              />
            </div>
            <div>
              <Typography
                variant="body1"
                color="text"
                style={{ padding: "10px 10px 10px 0px" }}
              >
                Choose your theme
              </Typography>
              {/* <Typography style={{ fontSize: "14px", fontWeight: "bold" }}>
                Light

              </Typography> */}
              <Box>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography>Light</Typography>
                  <Switch
                    checked={isDarkMode}
                    onChange={handleToggleTheme}
                    inputProps={{
                      "aria-label": "ant design",
                    }}
                  />
                  <Typography>Dark</Typography>
                </Stack>
              </Box>
              {/* <h1>{isDarkMode ? "Dark Theme" : "Light Theme"}</h1>
              <button onClick={handleToggleTheme}>
                {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
              </button> */}
            </div>
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default Setting;
