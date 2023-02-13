import React, { useState } from "react";

const SignInPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform authentication logic here
    if (username === "admin" && password === "password") {
      setErrorMessage("");
      // Redirect the user to the home page or display a success message
    } else {
      setErrorMessage("Incorrect username or password");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Login</h1>
      {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Username:
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <br />
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <br />
        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  title: {
    fontSize: "32px",
    marginBottom: "24px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "20px",
    marginBottom: "8px",
  },
  input: {
    height: "32px",
    width: "200px",
    fontSize: "16px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid gray",
  },
  button: {
    height: "40px",
    width: "100px",
    fontSize: "16px",
    borderRadius: "4px",
    backgroundColor: "lightblue",
    border: "none",
    color: "white",
    marginTop: "16px",
  },
  errorMessage: {
    color: "red",
    marginTop: "16px",
  },
};

export default SignInPage;
