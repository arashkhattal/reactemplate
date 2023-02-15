import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/globalContext";
import App from "./App";
//global css file
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // BrowserRouter is a react-router-dom library.
  <BrowserRouter>
    {/* proviver getting from global context */}
    <AppProvider>
      {/* lazy loading  */}
      <Suspense fallback="Loading...">
        {/* main application component */}
        <App />
      </Suspense>
    </AppProvider>
  </BrowserRouter>
);
