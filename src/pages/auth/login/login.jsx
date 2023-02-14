import {
  Box,
  Checkbox,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Google from "../../../assets/icon/google.png";
import { useGlobalContext } from "../../../context/globalContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  //to navigate to another page
  const navigate = useNavigate();
  const { setAlert } = useGlobalContext();
  //
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Login function
  const handleSubmitButton = () => {
    setAlert({
      flag: true,
      type: "success",
      msg: "Login successful",
    });
    navigate("/home");
  };
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
        <form>
          <Typography
            variant="h5"
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
              fontSize: "14px",
              textAlign: "center",
            }}
          >
            See your growth get consulting
            support!
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
                  Signin with Google
                </Typography>
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
            or Signin with Email
          </Divider>
          <TextField
            style={{
              width: "100%",
            }}
            id="outlined-basic"
            label="Username Email"
            value={username}
            onChange={(event) =>
              setUsername(event.target.value)
            }
            placeholder="mail@email.com"
            variant="outlined"
          />
          <TextField
            style={{
              width: "100%",
              marginTop: "20px",
            }}
            id="outlined-basic"
            label="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
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
              <Checkbox
                size="10px"
                defaultChecked
              />
              <Typography
                style={{ fontSize: "13px" }}
              >
                Remember me
              </Typography>
            </Box>

            <a
              style={{
                fontSize: "13px",
                color: "#0D80D8",
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
            onClick={handleSubmitButton}
            className="signing-btn signing-btn-bg"
            value="Login"
          >
            <Typography>Sign In</Typography>
          </button>

          <Box
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Typography style={{ fontSize: "13px" }}>
              Not registered yet?
            </Typography>
            <a
              style={{
                fontSize: "13px",
                color: "#0D80D8",
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
