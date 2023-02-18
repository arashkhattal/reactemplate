//imported lazy from react
import { lazy } from "react";
import { Typography } from "@mui/material";
import SunEditor from "./pages/sunEditor/SunEditor";

// MUI icons
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import InfoIcon from "@mui/icons-material/Info";
import TableChartIcon from "@mui/icons-material/TableChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Calendar from "./pages/fullCalendar/FullCalendar";

// Import components using lazy to load the component
const HomePage = lazy(() => import("./pages/home/HomePage"));
const Chart = lazy(() => import("./pages/home/charts/Chart"));
const Tables = lazy(() => import("./pages/home/tables/Tables"));
const InputField = lazy(() => import("./pages/InputField/InputField"));
const UploadFileList = lazy(() => import("./pages/UploadFiles/uploadFileList"));

// @mui icons
const Icon = lazy(() => import("@mui/material/Icon"));

// This is routes available in side bar
export const adminRoutes = [
  //object for normal option
  {
    type: "menu",
    name: <Typography sx={{ fontSize: "14px" }}>Dashboard</Typography>,
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    component: <HomePage />,
  },
  //object for normal option
  {
    type: "menu",
    name: <Typography sx={{ fontSize: "14px" }}>Chart</Typography>,
    key: "chart",
    route: "/chart",
    icon: <InsightsIcon fontSize="small" />,
    component: <Chart />,
  },
  //object for normal option
  {
    type: "menu",
    name: <Typography sx={{ fontSize: "14px" }}>Tables</Typography>,
    key: "table",
    route: "/table",
    icon: <TableChartIcon fontSize="small" />,
    component: <Tables />,
  },
  // object for collapse (dropdown)
  {
    type: "collapse",
    name: <Typography sx={{ fontSize: "14px" }}>Options</Typography>,
    key: "setting",
    icon: <SettingsIcon fontSize="small" />,
    collapse: [
      {
        name: <Typography sx={{ fontSize: "14px" }}>Sun Editor</Typography>,
        key: "suneditor",
        route: "/suneditor",
        icon: <Icon sx={{ fontSize: "14px" }}>S</Icon>,
        component: <SunEditor />,
      },
      {
        name: <Typography sx={{ fontSize: "14px" }}>Calendar</Typography>,
        key: "fullcalendar",
        route: "/fullcalendar",
        icon: <CalendarMonthIcon sx={{ fontSize: "14px" }} />,
        component: <Calendar />,
      },
    ],
  },
  {
    name: <Typography sx={{ fontSize: "14px" }}>Input Field</Typography>,
    key: "inputfield",
    route: "/inputfield",
    icon: <Icon fontSize="small">I</Icon>,
    component: <InputField />,
    noCollapse: true,
  },
  {
    name: <Typography sx={{ fontSize: "14px" }}>Upload File</Typography>,
    key: "uploadfiles",
    route: "/uploadfiles",
    icon: <Icon fontSize="small">U</Icon>,
    component: <UploadFileList />,
    noCollapse: true,
  },
];
