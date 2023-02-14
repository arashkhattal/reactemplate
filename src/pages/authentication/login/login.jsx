import { Box, Checkbox, Divider, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import Google from "../../../assets/icon/google.png";
import { useGlobalContext } from "../../../context/globalContext";
import { useNavigate } from "react-router-dom";

const style = {
  display: "flex",
  justifyContent: "center",
};

const Login = () => {
  //to navigate to another page
  const navigate = useNavigate();
  const { setAlert } = useGlobalContext();
  // 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        <form>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Login
          </Typography>
          <Typography
            sx={{
              my: "15px",
              color: "gray",
              fontSize: "14px",
            }}
          >
            See your growth get consulting support!
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
                <img style={{ width: "16px" }} src={Google} alt="" />
                <Typography>Signin with Google</Typography>
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
            label="Username Email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
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
            value={password}
            onChange={(event) => setPassword(event.target.value)}
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
              <Checkbox size="10px" defaultChecked />
              <Typography sx={{ fontSize: "14px" }}>Remember me</Typography>
            </Box>

            <a
              style={{
                fontSize: "14px",
                color: "#0D80D8",
                textDecoration: "none",
              }}
              href="/forgetpassWord"
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
            className="google-signing signing-btn"
            value="Login"
          >
            <Typography>Sign In</Typography>
          </button>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              my: "20px",
            }}
          >
            <Typography sx={{ fontSize: "16px" }}>Not registered yet?</Typography>
            <a
              style={{
                fontSize: "16px",
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
