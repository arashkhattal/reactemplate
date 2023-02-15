import {
  Box,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, {
  useEffect,
  useState,
} from "react";
import Google from "../../../assets/icon/google.png";
const style = {
  display: "flex",
  justifyContent: "center",
};
// mui textField modification
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root.Mui-focused": {
      color: "#0d80d8",
    },
    "& .MuiInputBase-root": {
      "& fieldset": {},
      "&.Mui-focused fieldset": {
        borderColor: "#0d80d8",
      },
    },
    width: "100%",
  },
}));

const signUp = () => {
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

  // mui textfield class
  const classes = useStyles();
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
            className="fs_24"
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
            className={classes.root}
            style={{
              width: "100%",
            }}
            id="outlined-basic"
            label="Email"
            placeholder="mail@email.com"
            variant="outlined"
          />
          <TextField
            className={classes.root}
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
            className={classes.root}
            style={{
              width: "100%",
              marginTop: "20px",
              marginBottom: "20px",
            }}
            id="outlined-basic"
            label="Confirm Password"
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
              gap: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography className="fs_13">
              Already have an account?
            </Typography>
            <a
              className="fs_13 color_primary"
              style={{
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
