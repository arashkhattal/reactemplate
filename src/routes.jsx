//imported lazy from react
import { lazy } from "react";

// MUI icons
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsightsIcon from "@mui/icons-material/Insights";
import InfoIcon from "@mui/icons-material/Info";
import TableChartIcon from "@mui/icons-material/TableChart";

// Import components using lazy to load the component
const HomePage = lazy(() => import("./pages/home/HomePage"));
const Chart = lazy(() => import("./pages/home/charts/Chart"));
const Tables = lazy(() => import("./pages/home/tables/Tables"));
const InputField = lazy(() => import("./pages/InputField/InputField"));
const UploadFiles = lazy(() =>
  import("./pages/UploadFiles/UploadFiles")
);

// @mui icons
const Icon = lazy(() => import("@mui/material/Icon"));

// This is routes available in side bar
export const adminRoutes = [
  //object for normal option
  {
    type: "menu",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon fontSize="small" />,
    component: <HomePage />,
  },
  //object for normal option
  {
    type: "menu",
    name: "Chart",
    key: "chart",
    route: "/chart",
    icon: <InsightsIcon fontSize="small" />,
    component: <Chart />,
  },
  //object for normal option
  {
    type: "menu",
    name: "Tables",
    key: "table",
    route: "/table",
    icon: <TableChartIcon fontSize="small" />,
    component: <Tables />,
  },
  // object for collapse (dropdown)
  {
    type: "collapse",
    name: "Setting",
    key: "setting",
    icon: <SettingsIcon fontSize="small" />,
    collapse: [
      {
        name: "About",
        key: "about1",
        route: "/about1",
        component: <Tables />,
      },
    ],
  },
  {
    name: "Input Field",
    key: "inputfield",
    route: "/inputfield",
    icon: <Icon fontSize="small">I</Icon>,
    component: <InputField />,
    noCollapse: true,
  },
  {
    name: "Upload File",
    key: "uploadfiles",
    route: "/uploadfiles",
    icon: <Icon fontSize="small">U</Icon>,
    component: <UploadFiles />,
    noCollapse: true,
  },
];
