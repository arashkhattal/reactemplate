import {
  Box,
  Checkbox,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import google from "/assets/icon/google.png";
import "./Login.css";
import "index.css";

const style = {
  display: "flex",
  justifyContent: "center",
};
const Login = () => {
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
            Login
          </Typography>
          <Typography
            sx={{
              my: "15px",
              color: "gray",
              fontSize: "14px",
            }}
          >
            See your growth get consulting
            support!
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
                  src={google}
                  alt=""
                />
                <Typography>
                  Signin with Google
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
            or Signin with Email
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
            label="password"
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
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Checkbox
                size="10px"
                defaultChecked
              />
              <Typography
                sx={{ fontSize: "14px" }}
              >
                Remember me
              </Typography>
            </Box>

            <a
              style={{
                fontSize: "14px",
                color: "#0D80D8",
                textDecoration: "none",
              }}
              href="#"
            >
              Forgot Password
            </a>
          </Box>

          <input
            type="submit"
            style={{
              color: "white",
            }}
            className="google-signing signing-btn"
            value="Login"
          />

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              my: "20px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>
              Not registered yet?
            </Typography>
            <a
              style={{
                fontSize: "16px",
                color: "#0D80D8",
                textDecoration: "none",
              }}
              href="#"
            >
              Create an Account
            </a>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
