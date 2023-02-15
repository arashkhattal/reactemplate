import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

import { adminRoutes } from "../../routes";

// default drawer width
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  // get routes data from global context
  const [curRoute, setCurRoute] = React.useState(adminRoutes);
  return (
    // drawer component imported from mui
    <Drawer
      sx={{
        marginTop: 64,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxShadow: "5px 2px 9px lightgrey",
          marginTop: 6.1,
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />

      {/* this will list the items in the side bar */}
      <List
        style={{
          marginTop: "-64px",
        }}
      >
        {/* curRoute will map the items in the side bar */}
        {curRoute?.map((data) => (
          <ListItem key={data?.key} disablePadding>
            {/* addded NavLink to page */}
            <NavLink
              to={data?.route}
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
            >
              {/* ListItemButton - added button */}
              <ListItemButton>
                <ListItemIcon>{data?.icon}</ListItemIcon>
                {/* text */}
                <ListItemText primary={data?.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
