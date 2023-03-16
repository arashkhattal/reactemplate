import React, { useState, useContext, createContext, useEffect } from "react";
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

  // state to maintain open close menu
  const [openMenu, setOpenMenu] = useState(true);
  const [resetModal, setResetModal] = useState(false);

  // create chat
  const [createChat, setCreateChat] = useState(false);

  // create chat group
  const [createGroup, setCreateGroup] = useState(false);
  // Input field modal
  const [inputModal, setInputModal] = useState(false);

  // default drawer width
  const drawerWidth = openMenu ? 210 : 75;

  // primary color
  const primaryColor = "#0d80d8";

  return (
    <AppContext.Provider
      value={{
        primaryColor,
        openMenu,
        setOpenMenu,
        drawerWidth,
        loading,
        setLoading,
        reload,
        setReload,
        alert,
        setAlert,
        resetModal,
        setResetModal,
        createChat,
        setCreateChat,
        createGroup,
        setCreateGroup,
        inputModal,
        setInputModal,
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
