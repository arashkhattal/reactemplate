import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
//added lazy loading
const PrimaryLayout = lazy(() => import("./layouts/Index"));
const Login = lazy(() => import("./pages/authentication/login/login"));
const SignUp = lazy(() => import("./pages/authentication/signUp/signUp"));
const ForgetPassWord = lazy(() =>
  import("./pages/authentication/forgotPassword/forgetPassword")
);
//global context
import { useGlobalContext } from "./context/globalContext";
import { adminRoutes } from "../routes";
//imported from MUI
import {
  Alert,
  Backdrop,
  CircularProgress,
  CssBaseline,
  Snackbar,
} from "@mui/material";

function App() {
  const [curRoute, setCurRoute] = useState(adminRoutes);
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

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
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
        <Route element={<PrimaryLayout />}>{getRoutes(curRoute)}</Route>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/forgetpassWord" element={<ForgetPassWord />} />
      </Routes>
    </>
  );
}

export default App;
