import {
  Box,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Google from "../../../assets/icon/google.png";
import { useGlobalContext } from "../../../context/globalContext";
import { validateEmail } from "../../../helpers/globalFunction";
import "../auth.css";
const signUp = () => {
  //store input data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");
  const { setAlert } = useGlobalContext();
  // signUp function
  const handleSubmit = async (e) => {
    if (email == "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Email",
      });
      return;
    }
    if (!validateEmail(email)) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Valid Email",
      });
      return;
    }
    if (password === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Password",
      });
      return;
    }
    if (confirmPassword === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Confirm Password",
      });
      return;
    }
    if (confirmPassword !== password) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Password didn't Match",
      });
      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "SignUp successful",
      });
      navigate("/dashboard");
    }
  };

  return (
    <Box
      className="container_center"
      noValidate
      autoComplete="off"
    >
      <Box
        style={{
          m: 1,
          width: "330px",
          padding: "20px",
          border: "1px solid #c5c7c5",
          margin: "20px 0px",
        }}
      >
        {" "}
        {/* <form> */}
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
          className="global_display_flex "
          style={{
            alignItems: "center",
          }}
        >
          <button className="btn_primary btn_google_hover">
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
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
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
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
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
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
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
          onClick={handleSubmit}
          className="btn_primary btn_primary_hover "
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
            Go to login page.
          </a>
        </Box>
        {/* </form> */}
      </Box>
    </Box>
  );
};

export default signUp;
