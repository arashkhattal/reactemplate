import { Box, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Google from "../../../assets/icon/google.png";
import { useGlobalContext } from "../../../context/globalContext";
import { useNavigate } from "react-router-dom";
import { validateEmail } from "../../../helpers/globalFunction";
import "../auth.css";
import { useDispatch, useSelector } from "react-redux";
import { USER_SIGNIN } from "../../../redux/constant/AuthConstant";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
// import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.AuthReducer);
  const dispatchRedux = useDispatch();

  //to navigate to another page
  const navigate = useNavigate();
  // global context
  const { setAlert } = useGlobalContext();
  //store input data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  const handleSubmit = async (e) => {
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
      dispatchRedux({
        type: USER_SIGNIN,
        isLoggedIn: true,
        // payload: {},
      });
      navigate("/dashboard");
    }
  };

  console.log("login :", isLoggedIn);

  const handleGoogleLoginSuccess = (response) => {
    const name = response.profileObj.name;
    const email = response.profileObj.email;

    // Use the name and email to log the user into your website
    console.log("User logged in successfully with Google:", name, email);
  };

  const handleGoogleLoginFailure = (response) => {
    if (response.error === "popup_closed_by_user") {
      console.log("User closed the Google Sign-In popup.");
    } else {
      console.log("Failed to log in with Google:", response);
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "338141788840-mdg0pr52mts8gssevcm49ukj262nrmk4.apps.googleusercontent.com",
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    dispatchRedux({
      type: USER_SIGNIN,
      isLoggedIn: true,
      // payload: {},
    });
    navigate("/dashboard");
    console.log("SUCCESS", response);
    const name = response.profileObj.name;
    const email = response.profileObj.email;

    // Use the name and email to log the user into your website
    console.log("User logged in successfully with Google:", name, email);
  };
  const onFailure = (response) => {
    console.log("FAILED", response);
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
        {/* <form> */}
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
          {/* <button className="btn_primary btn_google_hover">
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
          </button> */}
          <GoogleLogin
            clientId="338141788840-mdg0pr52mts8gssevcm49ukj262nrmk4.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
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
          style={{
            width: "100%",
          }}
          id="outlined-basic"
          label="User Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          placeholder="mail@email.com"
          variant="outlined"
        />
        <TextField
          style={{
            width: "100%",
            marginTop: "20px",
          }}
          id="outlined-basic"
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
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
              gap: "5px",
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
        {/* </form> */}
      </Box>
    </Box>
  );
};

export default Login;
