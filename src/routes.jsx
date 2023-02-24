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
// Import components using lazy to load the component
const Dashboard = lazy(() =>
  import("./pages/dashboard/Dashboard")
);
const Chart = lazy(() =>
  import("./pages/charts/Chart")
);
const Tables = lazy(() =>
  import("./pages/tables/Tables")
);
const InputField = lazy(() =>
  import("./pages/InputField/InputField")
);
const UploadFileList = lazy(() =>
  import("./pages/UploadFiles/uploadFileList")
);
const Calendar = lazy(() =>
  import("./pages/fullCalendar/FullCalendar")
);
const Profile = lazy(() =>
  import("./pages/Profile/Profile")
);
const MuiIconsList = lazy(() =>
  import("./pages/muiIcons/MuiIconsList")
);
const Setting = lazy(() =>
  import("./pages/Setting/Setting")
);
// const TooltipExample = lazy(() => import("./pages/Tooltips/Tooltips"));
const PushNotification = lazy(() =>
  import(
    "./pages/pushNotificaiton/PushNotification"
  )
);
const Messages = lazy(() =>
  import("./pages/Messages/Messages")
);
const InputForm = lazy(() =>
  import("./pages/inputForm/inputForm")
);

// @mui icons
const Icon = lazy(() =>
  import("@mui/material/Icon")
);

// This is routes available in side bar
export const adminRoutes = [
  //object for normal option
  {
    type: "menu",
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Dashboard
      </Typography>
    ),
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    component: <Dashboard />,
  },
  //object for normal option
  {
    type: "menu",
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Chart
      </Typography>
    ),
    key: "chart",
    route: "/chart",
    icon: <InsightsIcon fontSize="small" />,
    component: <Chart />,
  },
  //object for normal option
  {
    type: "menu",
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Tables
      </Typography>
    ),
    key: "table",
    route: "/table",
    icon: <TableChartIcon fontSize="small" />,
    component: <Tables />,
  },
  //object for normal option
  {
    type: "menu",
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Mui Icons
      </Typography>
    ),
    key: "muiicons",
    route: "/muiicons",
    icon: (
      <AdjustIcon sx={{ fontSize: "14px" }} />
    ),
    component: <MuiIconsList />,
  },
  // object for collapse (dropdown)
  {
    type: "collapse",
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Setting
      </Typography>
    ),
    key: "setting",
    icon: <SettingsIcon fontSize="small" />,
    collapse: [
      {
        name: (
          <Typography sx={{ fontSize: "14px" }}>
            Page One
          </Typography>
        ),
        key: "pagaone",
        route: "/pagaone",
        icon: (
          <Icon sx={{ fontSize: "14px" }}>S</Icon>
        ),
        component: <Setting />,
      },
    ],
  },
  // components
  {
    type: "collapse",
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Components
      </Typography>
    ),
    key: "components",
    icon: <GridViewIcon fontSize="small" />,
    collapse: [
      {
        name: (
          <Typography sx={{ fontSize: "14px" }}>
            Input Field
          </Typography>
        ),
        key: "inputfield",
        route: "/inputfield",
        icon: (
          <InputOutlinedIcon
            sx={{ fontSize: "14px" }}
          />
        ),
        component: <InputField />,
      },
      {
        name: (
          <Typography sx={{ fontSize: "14px" }}>
            Tooltips
          </Typography>
        ),
        key: "tooltips",
        route: "/tooltips",
        icon: (
          <BuildCircleOutlinedIcon
            sx={{ fontSize: "14px" }}
          />
        ),
        // component: <TooltipExample />,
      },
    ],
  },
  // sun editor
  {
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Sun Editor
      </Typography>
    ),
    key: "suneditor",
    route: "/suneditor",
    icon: (
      <FormatSizeIcon sx={{ fontSize: "14px" }} />
    ),
    component: <SunEditor />,
  },
  // calender
  {
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Calendar
      </Typography>
    ),
    key: "fullcalendar",
    route: "/fullcalendar",
    icon: (
      <CalendarMonthIcon
        sx={{ fontSize: "14px" }}
      />
    ),
    component: <Calendar />,
  },

  {
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Upload File
      </Typography>
    ),
    key: "uploadfiles",
    route: "/uploadfiles",
    icon: (
      <UploadIcon sx={{ fontSize: "18px" }} />
    ),
    component: <UploadFileList />,
  },
  {
    name: <Typography>Profile</Typography>,
    key: "profile",
    route: "/profile",
    icon: (
      <AccountCircleIcon
        sx={{ fontSize: "14px" }}
      />
    ),
    component: <Profile />,
  },

  {
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Notification
      </Typography>
    ),
    key: "pushnotification",
    route: "/pushnotification",
    icon: (
      <NotificationsActiveRounded fontSize="small" />
    ),
    component: <PushNotification />,
  },
  {
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        Messages
      </Typography>
    ),
    key: "messages",
    route: "/messages",
    icon: <Message fontSize="small" />,
    component: <Messages />,
  },
  {
    name: (
      <Typography sx={{ fontSize: "14px" }}>
        All Form
      </Typography>
    ),
    key: "inputForm",
    route: "/inputForm",
    icon: (
      <ViewListOutlinedIcon fontSize="small" />
    ),
    component: <InputForm />,
  },
];
