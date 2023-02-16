import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";

import { adminRoutes } from "../../routes";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { Collapse } from "@mui/material";

import { makeStyles } from "@material-ui/core/styles";

// default drawer width
const drawerWidth = 240;

// custom style for drawer
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function PermanentDrawerLeft() {
  // custom style
  const classes = useStyles();

  // get routes data from global context
  const [curRoute, setCurRoute] = React.useState(adminRoutes);

  // state to maintain dropdown
  const [open, setOpen] = useState({});
  console.log(open);
  useEffect(() => {}, []);

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
        {curRoute?.map((data) =>
          data?.type === "collapse" ? (
            <>
              <ListItem
                key={data?.key}
                disablePadding
                onClick={() =>
                  setOpen({
                    state: open?.id === data?.key && open?.state ? false : true,
                    id: data?.key,
                  })
                }
              >
                {/* addded NavLink to page */}
                {/* <NavLink
                  to={data?.route}
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                > */}
                {/* ListItemButton - added button */}
                <ListItemButton>
                  <ListItemIcon>{data?.icon}</ListItemIcon>
                  {/* text */}
                  <ListItemText primary={data?.name} />
                  {open?.id === data?.key && open?.state ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                {/* </NavLink> */}
              </ListItem>
              <Collapse in={open?.id === data?.key && open?.state} timeout="auto" unmountOnExit>
                {data?.collapse?.map((cdata) => (
                  <List component="div" disablePadding>
                    <ListItem key={cdata?.key} className={classes.nested}>
                      <NavLink
                        to={cdata?.route}
                        style={{
                          textDecoration: "none",
                          color: "black",
                          width: "100%",
                        }}
                      >
                        {/* ListItemButton - added button */}
                        <ListItemButton>
                          <ListItemIcon>{cdata?.icon}</ListItemIcon>
                          {/* text */}
                          <ListItemText primary={cdata?.name} />
                        </ListItemButton>
                      </NavLink>
                    </ListItem>
                  </List>
                ))}
              </Collapse>
            </>
          ) : (
            // sidebar option without dropdown
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
          )
        )}
      </List>
    </Drawer>
  );
}
