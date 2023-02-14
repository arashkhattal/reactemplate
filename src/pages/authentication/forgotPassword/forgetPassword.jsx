import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import "../forgotPassword/forgetPassword.css";

const forgotPassword = () => {
  return (
    <Box
      // component="form"
      sx={{
        marginTop: "200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Box
        sx={{
          m: 1,
          width: "26%",
          padding: "20px",
          border: "1px solid #c5c7c5",
        }}
      >
        {" "}
        <form>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            reset password
          </Typography>

          <TextField
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
            id="outlined-basic"
            label="reset password"
            variant="outlined"
            placeholder="Min. 8 character"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              my: "15px",
            }}
          ></Box>

          <button
            type="submit"
            style={{
              color: "white",
            }}
            className="google-signing signing-btn"
            value=" reset password"
          >
            <Typography>Reset</Typography>
          </button>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              my: "20px",
            }}
          >
            <a
              style={{
                fontSize: "16px",
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
