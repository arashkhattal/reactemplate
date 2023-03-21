//imported lazy from react
import { lazy } from "react";
import { Typography } from "@mui/material";
import SunEditor from "./pages/sunEditor/SunEditor";

// MUI icons

import GridViewIcon from "@mui/icons-material/GridView";
import SettingsIcon from "@mui/icons-material/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import Message from "@mui/icons-material/Message";
import TableChartIcon from "@mui/icons-material/TableChart";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationsActiveRounded from "@mui/icons-material/NotificationsActiveRounded";
import UploadIcon from "@mui/icons-material/Upload";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import AdjustIcon from "@mui/icons-material/Adjust";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";
import InputOutlinedIcon from "@mui/icons-material/InputOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";

import Profile from "./pages/Profile/Profile";
import ExportFile from "./pages/export file/Export";
import Tables from "./pages/tables/Tables";

// Import components using lazy to load the component
const Loading = lazy(() => import("./pages/loader/Loading"));
const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const Chart = lazy(() => import("./pages/charts/Chart"));
// const Tables = lazy(() => import("./pages/tables/Tables"));
const InputField = lazy(() => import("./pages/InputField/InputField"));
const UploadFileList = lazy(() => import("./pages/UploadFiles/uploadFileList"));
const Calendar = lazy(() => import("./pages/fullCalendar/FullCalendar"));
// const Profile = lazy(() => import("./pages/Profile/Profile"));
// const MuiIconsList = lazy(() => import("./pages/muiIcons/MuiIconsList"));
const Appearance = lazy(() => import("./pages/Setting/Appearance"));
const TooltipExample = lazy(() => import("./pages/Tooltips/Tooltips"));
const PushNotification = lazy(() =>
  import("./pages/pushNotificaiton/PushNotification")
);
const Messages = lazy(() => import("./pages/Messages/Messages"));
const InputForm = lazy(() => import("./pages/inputForm/inputForm"));

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
    component: <Dashboard />,
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
  //object for normal option
  // {
  //   type: "menu",
  //   name: <Typography sx={{ fontSize: "14px" }}>Mui Icons</Typography>,
  //   key: "muiicons",
  //   route: "/muiicons",
  //   icon: <AdjustIcon sx={{ fontSize: "14px" }} />,
  //   component: <MuiIconsList />,
  // },
  // calender
  {
    name: <Typography>Calendar</Typography>,
    key: "fullcalendar",
    route: "/fullcalendar",
    icon: <CalendarMonthIcon />,
    component: <Calendar />,
  },

  {
    name: <Typography>Upload File</Typography>,
    key: "uploadfiles",
    route: "/uploadfiles",
    icon: <UploadIcon />,
    component: <UploadFileList />,
  },

  {
    name: <Typography>Messages</Typography>,
    key: "messages",
    route: "/messages",
    icon: <Message />,
    component: <Messages />,
  },

  // components
  {
    type: "collapse",
    name: <Typography>Components</Typography>,
    key: "components",
    icon: <GridViewIcon />,
    collapse: [
      {
        name: <Typography sx={{ fontSize: "14px" }}>Export</Typography>,
        key: "export",
        route: "/export",
        icon: <Icon>ios_share</Icon>,
        component: <ExportFile />,
      },
      {
        name: <Typography sx={{ fontSize: "14px" }}>All Form</Typography>,
        key: "inputForm",
        route: "/inputForm",
        icon: <ViewListOutlinedIcon />,
        component: <InputForm />,
      },
      // sun editor
      {
        name: <Typography>Sun Editor</Typography>,
        key: "suneditor",
        route: "/suneditor",
        icon: <FormatSizeIcon />,
        component: <SunEditor />,
      },
      {
        type: "menu",
        name: <Typography>Loader</Typography>,
        key: "loading",
        route: "/loading",
        icon: <Icon sx={{ cursor: "pointer" }}>hourglass_bottom</Icon>,
        component: <Loading />,
      },
      {
        name: <Typography>Notification</Typography>,
        key: "pushnotification",
        route: "/pushnotification",
        icon: <NotificationsActiveRounded />,
        component: <PushNotification />,
      },
      {
        name: <Typography>Input Field</Typography>,
        key: "inputfield",
        route: "/inputfield",
        icon: <InputOutlinedIcon />,
        component: <InputField />,
      },
      {
        name: <Typography>Tooltips</Typography>,
        key: "tooltips",
        route: "/tooltips",
        icon: <BuildCircleOutlinedIcon />,
        component: <TooltipExample />,
      },
      {
        name: <Typography>Profile</Typography>,
        key: "profile",
        route: "/profile",
        icon: <AccountCircleIcon />,
        component: <Profile />,
      },
    ],
  },

  // object for collapse (dropdown)
  {
    type: "collapse",
    name: <Typography sx={{ fontSize: "14px" }}>Setting</Typography>,
    key: "setting",
    icon: <SettingsIcon fontSize="small" />,
    collapse: [
      {
        name: <Typography>Appearance</Typography>,
        key: "appearance",
        route: "/appearance",
        icon: <Icon>auto_awesome</Icon>,
        component: <Appearance />,
      },
    ],
  },
];
