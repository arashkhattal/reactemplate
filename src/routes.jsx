//imported lazy from react
import { lazy } from "react";

// MUI icons
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import InsightsIcon from "@mui/icons-material/Insights";
import InfoIcon from "@mui/icons-material/Info";
// import AddchartIcon from "@mui/icons-material/Addchart";

// Import components using lazy to load the component
const HomePage = lazy(() =>
  import("./pages/home/HomePage")
);
const Chart = lazy(() =>
  import("./pages/home/charts/Chart")
);
const About = lazy(() =>
  import("./pages/home/About")
);
const InputField = lazy(() =>
  import("./pages/InputField/InputField")
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
    name: "About",
    key: "about",
    route: "/about",
    icon: <InfoIcon fontSize="small" />,
    component: <About />,
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
        component: <About fontSize="small" />,
      },
    ],
  },
  // object for collapse (dropdown)
  {
    type: "collapse",
    name: "arash",
    key: "arash",
    icon: <Icon fontSize="medium">settings</Icon>,
    collapse: [
      {
        name: "test",
        key: "test1",
        route: "/test1",
        component: <About />,
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
];
