import { Button, Container, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    if (username === "admin" && password === "password") {
      setErrorMessage("");
      props.history.push("/home");
      // Redirect the user to the home page or display a success message
    } else {
      setErrorMessage("Incorrect username or password");
    }
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
        <form className={styles.form} onSubmit={handleSubmit}>
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
          <Link to="/home">
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.button}
            >
              Login
            </Button>
          </Link>
        </form>
      </Box>
    </>
  );
};

export default SignInPage;
