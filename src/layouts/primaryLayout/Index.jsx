import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../../components/appBar/AppBar";
import Sidebar from "../../components/sideBar/Sidebar";

// custom style component from Mui
import styled from "styled-components";

const Index = () => {
  return (
    // common component render in every page
    <>
      <AppBarWrapper>
        {/* App bar component */}
        <AppBar />
      </AppBarWrapper>
      <Wrapper>
        <SidebarWrapper>
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
  margin-top: 64px;
  height: calc(100vh - 64px);
`;

// style for sidebar
const SidebarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  height: 100%;
`;

// style for main content
const ContentWrapper = styled.div`
  height: 100%;
  max-height: 95vh;
  overflow: auto;
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
`;

export default Index;
