import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
//added lazy loading
const PrimaryLayout = lazy(() => import("./layouts/primaryLayout/Index"));
const Login = lazy(() => import("./pages/auth/login/login"));
const SignUp = lazy(() => import("./pages/auth/signUp/signUp"));
const ResetPassword = lazy(() => import("./pages/auth/resetPassword/resetPassword"));
//global context
import { useGlobalContext } from "./context/globalContext";

// adminRoutes imported from Routes.jsx file
import { adminRoutes } from "./routes";

//imported from MUI
import { Alert, Backdrop, CircularProgress, CssBaseline, Snackbar } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#66b53f",
        main: "#66b53f",
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
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        {/* Loading - Imported from MUI */}
        <Backdrop style={{ zIndex: "10000", color: "#fff" }} open={loading}>
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
    </>
  );
}

export default App;
