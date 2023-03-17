import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/appBar/AppBar";
import Sidebar from "../../components/sideBar/Sidebar";
import { useGlobalContext } from "../../context/globalContext";
// custom style component from Mui
import styled from "styled-components";

const Index = () => {
  // global context to access global state of drawerWidth
  const { drawerWidth } = useGlobalContext();

  return (
    // common component render in every page
    <>
      <AppBarWrapper>
        {/* App bar component */}
        <AppBar />
      </AppBarWrapper>
      <Wrapper>
        <SidebarWrapper
          style={{
            width: `${drawerWidth}px`,
            flexShrink: 0,
            height: "100%",
            transition: "0.6s",
          }}
        >
          {/* side bar component */}
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>
          {/* main content */}
          <Outlet />
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default Index;

// style for app bar
const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

// style for sidebar and main content
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 55px;
  height: calc(100vh - 56px);
`;

// style for sidebar
const SidebarWrapper = styled.div``;

// style for main content
const ContentWrapper = styled.div`
  padding: 10px;
  height: 100%;
  max-height: 95vh;
  overflow: auto;
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
