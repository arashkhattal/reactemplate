import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const sideBarPage = [
    {
      name: "Contact",
      key: "contact",
      to: "/contact",
      icon: "<MailIcon/>",
    },
    {
      name: "About",
      key: "about",
      to: "/about",
      icon: "<InboxIcon/>",
    },
  ];
  return (
    // drawer component imported from mui
    <Drawer
      sx={{
        marginTop: 64,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      {/*Divider - simply add the line  */}
      <Divider />

      {/* this will list the items in the side bar */}
      <List>
        <ListItem key={"Dashboard"} disablePadding>
          {/* addded link to page */}
          <Link
            to={"/dashboard"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            {/* ListItemButton - added button   */}
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "black" }} />
              </ListItemIcon>
              {/* text */}
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Contact"} disablePadding>
          {/* addded link to page */}
          <Link
            to={"/contact"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            {/* ListItemButton - added button   */}
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "black" }} />
              </ListItemIcon>
              {/* text */}
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"About"} disablePadding>
          {/* addded link to page */}
          <Link
            to={"/about"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            {/* ListItemButton - added button   */}
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "black" }} />
              </ListItemIcon>
              {/* text */}
              <ListItemText primary={"About"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
