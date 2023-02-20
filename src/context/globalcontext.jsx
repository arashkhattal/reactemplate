import React, {
  useState,
  useContext,
  createContext,
} from "react";
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
  const [resetModal, setResetModal] =
    useState(false);
  // create chat
  const [createChat, setCreateChat] =
    useState(false);
  // default drawer width
  const drawerWidth = openMenu ? 210 : 75;

  return (
    <AppContext.Provider
      value={{
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
