import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppProvider from "./context/globalContext";
import App from "./App";
//global css file
import "./index.css";

// redux provider
import { Provider } from "react-redux";
import { store } from "./redux/store";
// redux persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const LoadingFallback = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      Loading...
    </div>
  );
};

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
  // BrowserRouter is a react-router-dom library.
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* proviver getting from global context */}
        <AppProvider>
          {/* lazy loading  */}
          <Suspense fallback={<LoadingFallback />}>
            {/* main application component */}
            <App />
          </Suspense>
        </AppProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
