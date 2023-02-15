import React from "react";

import { Outlet } from "react-router-dom";

import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";

const Index = () => {
  return (
    <>
      {/* AppBar is common component available for all pages */}
      <AppBar/>
      <Sidebar>
        <Outlet />
      </Sidebar>
      {/* Outlet will fetch tyhe remaing component */}
    </>
  );
};

export default Index;
