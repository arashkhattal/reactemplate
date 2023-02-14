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
      <Divider />
      <List>
        <ListItem key={"Dashboard"} disablePadding>
          <Link
            to={"/dashboard"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary={"Dashboard"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"Contact"} disablePadding>
          <Link
            to={"/contact"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary={"Contact"} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={"About"} disablePadding>
          <Link
            to={"/about"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            <ListItemButton>
              <ListItemIcon>
                <ListItemIcon sx={{ color: "black" }} />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
