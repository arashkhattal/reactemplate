import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
//added lazy loading
const HomePage = lazy(() => import("./pages/HomePage"));
import SignInPage from "./pages/SignInPage";
//global context
import { useGlobalContext } from "./context/globalcontext";
import {
  Alert,
  Backdrop,
  CircularProgress,
  CssBaseline,
  Snackbar,
} from "@mui/material";

function App() {
  //getting value from global context
  const { loading, setLoading, alert, setAlert } = useGlobalContext();
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
      {/* Loading */}
      <Backdrop style={{ zIndex: "10000", color: "#fff" }} open={loading}>
        <CircularProgress />
      </Backdrop>
      {/* Alert */}
      <Snackbar
        open={alert?.flag}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={5000}
        onClose={handleAlertClose}
      >
        <Alert onClose={handleAlertClose} severity={alert?.type}>
          {alert?.msg}
        </Alert>
      </Snackbar>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
