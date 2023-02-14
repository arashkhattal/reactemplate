import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
//added lazy loading
const HomePage = lazy(() =>
  import("./pages/home/HomePage")
);
const SignInPage = lazy(() =>
  import("./pages/auth/SignInPage")
);
const Login = lazy(() =>
  import("./pages/auth/login/login")
);
const SignUp = lazy(() =>
  import("./pages/auth/signUp/signUp")
);
const ForgetPassWord = lazy(() =>
  import(
    "./pages/auth/forgotPassword/forgetPassword"
  )
);
//global context
import { useGlobalContext } from "./context/globalContext";
//imported from MUI
import {
  Alert,
  Backdrop,
  CircularProgress,
  CssBaseline,
  Snackbar,
} from "@mui/material";

function App() {
  //getting value from global context
  const { loading, setLoading, alert, setAlert } =
    useGlobalContext();
  //to close Alert
  const handleAlertClose = () => {
    setAlert({
      flag: false,
      type: "",
      msg: "",
    });
  };
  return (
    <>
      <CssBaseline />
      {/* Loading - Imported from MUI */}
      <Backdrop
        style={{ zIndex: "10000", color: "#fff" }}
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
      {/* Alert - Imported from MUI*/}
      <Snackbar
        open={alert?.flag}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={5000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={alert?.type}
        >
          {alert?.msg}
        </Alert>
      </Snackbar>
      {/* for routing from one page to another */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<HomePage />}
        />
        <Route
          path="/SignUp"
          element={<SignUp />}
        />
        <Route
          path="/forgetpassWord"
          element={<ForgetPassWord />}
        />
      </Routes>
    </>
  );
}

export default App;
