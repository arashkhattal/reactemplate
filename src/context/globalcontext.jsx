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


  //  const [themeColor, setThemeColor] = useState(
  //    localStorage.getItem("themeColor") || "#0d80d8"
  //  );

  //  useEffect(() => {
  //    setColor(themeColor);
  //  }, []);

  //  useEffect(() => {
  //    const color = getComputedStyle(document.documentElement).getPropertyValue(
  //      "--color_primary"
  //    );
  //    console.log(`--color_primary: ${color}`);
  //  }, []);

  //  function hexToRgba(hex, opacity) {
  //    hex = hex.replace("#", "");
  //    if (hex.length === 3) {
  //      hex = hex
  //        .split("")
  //        .map(function (h) {
  //          return h + h;
  //        })
  //        .join("");
  //    }
  //    var r = parseInt(hex.substring(0, 2), 16);
  //    var g = parseInt(hex.substring(2, 4), 16);
  //    var b = parseInt(hex.substring(4, 6), 16);
  //    return "rgba(" + r + ", " + g + ", " + b + ", " + opacity + ")";
  //  }

  //  const setColor = (themeColor) => {
  //    console.log(`Updating --color_primary to: ${themeColor}`);
  //    const secondaryColor = hexToRgba(themeColor, 0.203);
  //    document.documentElement.style.setProperty("--color_primary", themeColor);
  //    document.documentElement.style.setProperty(
  //      "--color_secondary",
  //      secondaryColor
  //    );
  //    localStorage.setItem("themeColor", themeColor);
  //  };



  return (
    <AppContext.Provider
      value={{
        // setColor,
        // themeColor,
        //  setThemeColor,
        // primaryColor,
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
