import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
//added lazy loading
const HomePage = lazy(() => import("./pages/home/HomePage"));
const Contact = lazy(() => import("./pages/home/Contact"));
const About = lazy(() => import("./pages/home/About"));
const Login = lazy(() => import("./pages/auth/login/login"));
const SignUp = lazy(() => import("./pages/auth/signUp/signUp"));
const ResetPassword = lazy(() =>
  import(
    "./pages/auth/resetPassword/resetPassword"
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
  const { loading, alert, setAlert } = useGlobalContext();
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
      <Backdrop style={{ zIndex: "10000", color: "#fff" }} open={loading}>
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
        <Alert onClose={handleAlertClose} severity={alert?.type}>
          {alert?.msg}
        </Alert>
      </Snackbar>
      {/* for routing from one page to another */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </>
  );
}

export default App;
