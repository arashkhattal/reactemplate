import {
  Box,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Google from "../../../assets/icon/google.png";
const style = {
  display: "flex",
  justifyContent: "center",
};
const signUp = () => {
  return (
    <Box
      // component="form"
      className="container-center "
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
              marginTop: "15px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Sign up
          </Typography>

          <Box
            className="global-display-flex"
            style={{
              alignItems: "center",
            }}
          >
            <button className="signing-btn google-signingBtn-bg">
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <img
                  style={{ width: "16px" }}
                  src={Google}
                  alt=""
                />
                <Typography>
                  Sign up with Google
                </Typography>
              </Box>
            </button>
          </Box>
          <Divider
            style={{
              color: "gray",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            or Sign up with Email
          </Divider>
          <TextField
            style={{
              width: "100%",
            }}
            id="outlined-basic"
            label="Email"
            placeholder="mail@email.com"
            variant="outlined"
          />
          <TextField
            style={{
              width: "100%",
              marginTop: "20px",
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Min. 8 character"
          />
          <TextField
            style={{
              width: "100%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            id="outlined-basic"
            label="confirm Password"
            variant="outlined"
            placeholder="Min. 8 character"
          />

          <button
            type="submit"
            style={{
              color: "white",
              marginTop: "10px",
            }}
            className="signing-btn signing-btn-bg"
            value="Login"
          >
            <Typography>Sign Up</Typography>
          </button>

          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "12px",
            }}
          >
            <Typography
              style={{ fontSize: "13px" }}
            >
              Are you registered already?
            </Typography>
            <a
              style={{
                fontSize: "13px",
                color: "#0D80D8",
                textDecoration: "none",
              }}
              href="/"
            >
              go to login page.
            </a>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default signUp;
