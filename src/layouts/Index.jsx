// import React from "react";

// import { Outlet } from "react-router-dom";

// import AppBar from "../components/AppBar";
// import Sidebar from "../components/Sidebar";

// const Index = () => {
//   return (
//     <>
//       {/* AppBar is common component available for all pages */}
//       <div>
//         <AppBar />

//         <div style={{ marginLeft:"calc(100vw - 500px)"}}>
//           <Sidebar />
//           <div
//             style={{
//               maxHeight: "calc(100vh - 100px)",
//               maxWidth: "calc(100vw - 500px)",
//               overflow: "auto",
//             }}
//           >
//             <Outlet />
//           </div>
//         </div>
//       </div>
//       {/* Outlet will fetch tyhe remaing component */}
//     </>
//   );
// };

// export default Index;

import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Sidebar from "../components/Sidebar";
import styled from "styled-components";

const Index = () => {
  return (
    <>
      <AppBarWrapper>
        <AppBar />
      </AppBarWrapper>
      <Wrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

const AppBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: stretch;
  margin-top: 64px;
  height: calc(100vh - 64px);
`;

const SidebarWrapper = styled.div`
  width: 250px;
  flex-shrink: 0;
  height: 100%;
`;

const ContentWrapper = styled.div`
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
  overflow-y: auto;
`;

export default Index;
