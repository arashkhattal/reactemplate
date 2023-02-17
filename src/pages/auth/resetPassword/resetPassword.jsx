import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useGlobalContext } from "../../../context/globalContext";
import { validateEmail } from "../../../helpers/globalFunction";
import "../auth.css";
const forgotPassword = () => {
  // global context
  const { setAlert } = useGlobalContext();
  //store input data
  const [email, setEmail] = useState("");

  // Reset password function
  const handleSubmit = async (e) => {
    if (email === "") {
      setAlert({
        flag: true,
        type: "error",
        msg: "Please Enter Email",
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
    } else {
      setAlert({
        flag: true,
        type: "success",
        msg: "Password Successfully Changed",
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
            textAlign: "center",
          }}
        >
          Reset Password
        </Typography>
        <TextField
          style={{
            width: "100%",
            marginTop: "20px",
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
          type="email"
          id="outlined-basic"
          label="Enter Your Email"
          variant="outlined"
        />
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
            marginBottom: "15px",
          }}
        ></Box>
        <button
          type="submit"
          style={{
            color: "white",
          }}
          onClick={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          className="btn_primary btn_primary_hover "
          value=" reset password"
        >
          <Typography>Reset</Typography>
        </button>
        <Box
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <a
            className="fs_13 color_primary "
            style={{
              textDecoration: "none",
            }}
            href="/"
          >
            Back to Login
          </a>
        </Box>
        {/* </form> */}
      </Box>
    </Box>
  );
};

export default forgotPassword;
