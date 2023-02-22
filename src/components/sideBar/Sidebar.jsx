import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";

import { adminRoutes } from "../../routes";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, Tooltip, Typography } from "@mui/material";
import { useGlobalContext } from "../../context/globalContext";
import { makeStyles } from "@mui/styles";

export default function PermanentDrawerLeft() {
  // global context
  const { drawerWidth, openMenu, setOpenMenu } = useGlobalContext();

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
      paddingLeft: theme.spacing(1),
    },
  }));

  // custom style
  const classes = useStyles();

  // get routes data from global context
  const [curRoute, setCurRoute] = useState(adminRoutes);

  // state to maintain dropdown
  const [open, setOpen] = useState({});
  console.log(open);

  // useEffects that will maintain state of dropdown when refresh

  useEffect(() => {
    const localStorageOpenState = localStorage.getItem("openState");
    if (localStorageOpenState) {
      setOpen(JSON.parse(localStorageOpenState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("openState", JSON.stringify(open));
  }, [open]);

  return (
    // drawer component imported from mui
    <Drawer
      sx={{
        marginTop: 64,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxShadow: "5px 2px 9px lightgrey",
          marginTop: 6.9,
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* option to close or open menu  */}

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
                {/* ListItemButton - added button */}
                <ListItemButton>
                  {openMenu ? (
                    <ListItemIcon>{data?.icon}</ListItemIcon>
                  ) : (
                    <Tooltip title={data?.name} arrow>
                      <ListItemIcon>{data?.icon}</ListItemIcon>
                    </Tooltip>
                  )}
                  {/* text */}
                  <ListItemText
                    primary={data?.name}
                    style={{
                      display: openMenu ? "block" : "none",
                    }}
                  />
                  {open?.id === data?.key && open?.state ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
              </ListItem>
              <Collapse
                in={open?.id === data?.key && open?.state}
                timeout="auto"
                unmountOnExit
              >
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
                          {openMenu ? (
                            <ListItemIcon>{cdata?.icon}</ListItemIcon>
                          ) : (
                            <Tooltip title={cdata?.name} arrow>
                              <ListItemIcon>{cdata?.icon}</ListItemIcon>
                            </Tooltip>
                          )}

                          {/* text */}
                          <ListItemText
                            primary={cdata?.name}
                            style={{
                              display: openMenu ? "block" : "none",
                            }}
                          />
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
                  {openMenu ? (
                    <ListItemIcon>{data?.icon}</ListItemIcon>
                  ) : (
                    <Tooltip title={data?.name} arrow>
                      <ListItemIcon>{data?.icon}</ListItemIcon>
                    </Tooltip>
                  )}

                  {/* text */}
                  <ListItemText
                    primary={data?.name}
                    style={{
                      display: openMenu ? "block" : "none",
                    }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          )
        )}
      </List>
    </Drawer>
  );
}
