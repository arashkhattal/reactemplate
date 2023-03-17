import { lazy, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
//global context
import { useGlobalContext } from "./context/globalContext";

// adminRoutes imported from Routes.jsx file
import { adminRoutes } from "./routes";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//imported from MUI
import {
  Alert,
  Backdrop,
  CircularProgress,
  CssBaseline,
  Snackbar,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { hexToRgba } from "../src/helpers/globalFunction";

//added lazy loading
const PrimaryLayout = lazy(() => import("./layouts/primaryLayout/Index"));
const Login = lazy(() => import("./pages/auth/login/login"));
const SignUp = lazy(() => import("./pages/auth/signUp/signUp"));
const ResetPassword = lazy(() =>
  import("./pages/auth/resetPassword/resetPassword")
);

function App() {
  useEffect(() => {
    let themeColor = localStorage.getItem("themeColor");
    if (themeColor) {
      const secondaryColor = hexToRgba(themeColor, 0.203);
      document.documentElement.style.setProperty("--color_primary", themeColor);
      document.documentElement.style.setProperty(
        "--color_secondary",
        secondaryColor
      );
    }
  }, []);

  useEffect(() => {
    let bgColor = localStorage.getItem("bgColor");
    console.log("color :", bgColor);
    if (bgColor) {
      const textColor = hexToRgba("#fff", 0.9);
      const cardColor = hexToRgba(bgColor, 0.203);
      document.documentElement.style.setProperty("--background_color", bgColor);
      document.documentElement.style.setProperty("--text_color", textColor);
      // document.documentElement.style.setProperty(
      //   "--color_secondary",
      //   "lightgrey"
      // );
    } 
  }, []);

  const { isLoggedIn } = useSelector((state) => state.AuthReducer);

  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
    } else navigate("/");
  }, [isLoggedIn]);

  // get primary color from index.css
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--color_primary")
    .trim();
  // create mui theme
  const theme = createTheme({
    palette: {
      primary: {
        light: "#66b53f",
        main: primaryColor,
        dark: "#66b53f",
        contrastText: "#fff",
      },
      secondary: {
        light: "#ff7961",
        main: "#f44336",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
  // state to store adminRoutes
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

  // function to call routes
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
    <div className="bg">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Loading - Imported from MUI */}
        <Backdrop
          style={{
            zIndex: "10000",
            color: "#fff",
          }}
          open={loading}
        >
          {/* Circular Progress imported from MUI */}
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

          {/* added layout feature */}
          {/* from getRoutes(curRoute) we are getting the routes from the adminRoutes array */}
          <Route element={<PrimaryLayout />}>{getRoutes(curRoute)}</Route>

          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
