import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
//added lazy loading
const HomePage = lazy(() => import("./pages/HomePage"));
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignInPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
