import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React, {
  useEffect,
  useState,
} from "react";

const forgotPassword = () => {
  // screen size condition useState
  const [isDesktop, setDesktop] = useState("");
  // screen size condition function
  const updateMedia = () => {
    setDesktop(
      window.innerHeight < 940 &&
        window.innerWidth < 940
    );
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      updateMedia
    );
    return () =>
      window.removeEventListener(
        "resize",
        updateMedia
      );
  });
  return (
    <Box
      // component="form"
      className={`${
        !isDesktop
          ? "container-center"
          : "container-center auth-screen-size"
      }`}
      noValidate
      autoComplete="off"
    >
      <Box
        style={{
          m: 1,
          width: "330px",
          padding: "20px",
          border: "1px solid #c5c7c5",
        }}
      >
        {" "}
        <form>
          <Typography
            variant="h5"
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Reset Password
          </Typography>

          <TextField
            style={{
              width: "100%",
              marginTop: "20px",
            }}
            id="outlined-basic"
            label="Reset Password"
            variant="outlined"
            placeholder="Min. 8 character"
          />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          ></Box>

          <button
            type="submit"
            style={{
              color: "white",
            }}
            className="signing-btn-bg signing-btn"
            value=" reset password"
          >
            <Typography>Reset</Typography>
          </button>

          <Box
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <a
              style={{
                fontSize: "13px",
                color: "#0D80D8",
                textDecoration: "none",
              }}
              href="/"
            >
              Back to Login
            </a>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default forgotPassword;
