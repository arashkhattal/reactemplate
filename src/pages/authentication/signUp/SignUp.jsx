import {
  Box,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Google from "../../../assets/icon/google.png";
import "./signUp.css";
const style = {
  display: "flex",
  justifyContent: "center",
};
const signUp = () => {
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
            sx={{
              fontWeight: "bold",
              my: "15px",
            }}
          >
            Sign up
          </Typography>

          <Box
            style={
              ({
                alignItems: "center",
              },
              style)
            }
          >
            <button className="google-signing google-signingBtn ">
              <Box
                sx={{
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
            sx={{
              color: "gray",
              my: "25px",
            }}
          >
            or Sign up with Email
          </Divider>
          <TextField
            sx={{
              width: "100%",
            }}
            id="outlined-basic"
            label="Email"
            placeholder="mail@email.com"
            variant="outlined"
          />
          <TextField
            sx={{
              width: "100%",
              marginTop: "20px",
            }}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            placeholder="Min. 8 character"
          />
          <TextField
            sx={{
              width: "100%",
              marginTop: "20px",
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
            className="google-signing signing-btn"
            value="Login"
          >
            <Typography>Sign Up</Typography>
          </button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              my: "20px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>
              Are you registered already?
            </Typography>
            <a
              style={{
                fontSize: "16px",
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
