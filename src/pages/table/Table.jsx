import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { TextField } from "@mui/material";
import Outlined from "./tableData/Outlined";
import Filled from "./tableData/Filled";
import Standard from "./tableData/Standard";
import { Card } from "@material-ui/core";

const Table = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box className="main_content"  sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            className="global_display_flex"
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Outlined" value="1" />
              <Tab label="Filled" value="2" />
              <Tab label="Standard" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "25ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Outlined />
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "25ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Filled />
            </Box>
          </TabPanel>
          <TabPanel value="3">
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": {
                  m: 1,
                  width: "25ch",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <Standard />
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
  );
};
export default Table;
