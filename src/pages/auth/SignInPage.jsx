import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/globalContext";

const styles = {
  title: {
    fontSize: "32px",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  textField: {
    margin: 1,
    width: "25ch",
  },
  button: {
    margin: 1,
    width: "10ch",
  },
};

const SignInPage = () => {
  //getting value from global context
  const { setAlert } = useGlobalContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  //to navigate to another page
  const navigate = useNavigate();

  const handleSubmitButton = () => {
    setAlert({
      flag: true,
      type: "success",
      msg: "Login successful",
    });
    navigate("/home");
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h6" className={styles.title}>
          Login
        </Typography>
        {errorMessage && (
          <Typography variant="body1" color="error">
            {errorMessage}
          </Typography>
        )}
        <form className={styles.form}>
          <TextField
            label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            className={styles.textField}
          />
          <br />
          <br />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className={styles.textField}
          />
          <br />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={styles.button}
            onClick={handleSubmitButton}
          >
            Login
          </Button>
        </form>
      </Box>
    </>
  );
};

export default SignInPage;
