import { Box, Checkbox, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Google from "../../../assets/icon/google.png";
import { useGlobalContext } from "../../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { checkboxClasses } from "@mui/material";
import { validateEmail } from "../../../helpers/globalFunction";

const Login = () => {
  //to navigate to another page
  const navigate = useNavigate();
  // global context
  const { setAlert } = useGlobalContext();
  //store input data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please enter Email",
      });
      return;
    }
    if (email !== "demo@gmail.com") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter valid Email",
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
    if (password != 123456) {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter valid Password",
      });
      return;
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Login successful",
      });
      navigate("/dashboard");
    }
  };

  return (
    <Box
      // component="form"
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
        <form>
          <Typography
            className="fs_24"
            style={{
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Login
          </Typography>
          <Typography
            style={{
              marginTop: "15px",
              marginBottom: "15px",
              color: "gray",
              textAlign: "center",
            }}
            className="fs_14"
          >
            See your growth get consulting support!
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
                <img style={{ width: "16px" }} src={Google} alt="" />
                <Typography>Login with Google</Typography>
              </Box>
            </button>
          </Box>
          <Divider
            style={{
              color: "gray",
              marginTop: "25px",
              marginBottom: "25px",
            }}
          >
            or Login with Email
          </Divider>
          <TextField
            // className={classes.root}
            style={{
              width: "100%",
            }}
            id="outlined-basic"
            label="User Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mail@email.com"
            variant="outlined"
          />
          <TextField
            // className={classes.root}
            style={{
              width: "100%",
              marginTop: "20px",
            }}
            id="outlined-basic"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input type="checkbox" size="10px" defaultChecked />
              <Typography className="fs_13 ">Remember me</Typography>
            </Box>
            <a
              className="fs_13 color_primary"
              style={{
                textDecoration: "none",
              }}
              href="/resetPassword"
            >
              Forgot Password
            </a>
          </Box>

          <button
            type="submit"
            style={{
              color: "white",
            }}
            onClick={handleSubmit}
            className="btn_primary btn_primary_hover "
            value="Login"
          >
            <Typography>Login</Typography>
          </button>

          <Box
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography className="fs_13">Not registered yet?</Typography>
            <a
              className="fs_13 color_primary"
              style={{
                textDecoration: "none",
              }}
              href="/signup"
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
