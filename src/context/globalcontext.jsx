import React, { useState, useContext, createContext } from "react";
const AppContext = createContext();
const AppProvider = ({ children }) => {

  // loader component
  const [loading, setLoading] = useState(false);

  // reload state
  const [reload, setReload] = useState(2);

  // Alert component
  const [alert, setAlert] = useState({
    flag: false,
    type: "",
    msg: "",
  });



  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        reload,
        setReload,
        alert,
        setAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
