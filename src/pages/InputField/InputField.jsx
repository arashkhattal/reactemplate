import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Outlined from "./InputFieldData/Outlined";
import Filled from "./InputFieldData/Filled";
import Standard from "./InputFieldData/Standard";
import "./InputField.css";
import { useGlobalContext } from "../../context/globalContext";
const Table = () => {
  // store tab number
  const [value, setValue] = React.useState("1");
  console.log(value);
  // change the tab number function
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { setLoading } = useGlobalContext();
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <Box
      sx={{ width: "100%", typography: "body1" }}
    >
      <TabContext value={value}>
        <Box
          className="global_display_flex"
          sx={{
            borderBottom: 1,
            borderColor: "divider",
          }}
        >
          {/* list of tab */}
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
          >
            <Tab label="Outlined" value="1" />
            <Tab label="Filled" value="2" />
            <Tab label="Standard" value="3" />
          </TabList>
        </Box>
        {/* Outlined tab */}
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
        {/* Filled tab */}
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
        {/* Standard tab */}
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
