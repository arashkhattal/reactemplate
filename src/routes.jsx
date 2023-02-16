//imported lazy from react
import { lazy } from "react";

// Import components using lazy to load the component
const HomePage = lazy(() =>
  import("./pages/home/HomePage")
);
const Contact = lazy(() =>
  import("./pages/home/Contact")
);
const About = lazy(() =>
  import("./pages/home/About")
);
const InputField = lazy(() =>
  import("./pages/table/InputField")
);

// @mui icons
const Icon = lazy(() =>
  import("@mui/material/Icon")
);

// MUI icons
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ContactsIcon from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";

// This is routes available in side bar
export const adminRoutes = [
  //object for normal option
  {
    type: "menu",
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <DashboardIcon />,
    component: <HomePage />,
    noCollapse: true,
  },
  //object for normal option
  {
    type: "menu",
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <ContactsIcon />,
    component: <Contact />,
    noCollapse: true,
  },
  //object for normal option
  {
    type: "menu",
    name: "About",
    key: "about",
    route: "/about",
    icon: <InfoIcon />,
    component: <About />,
    noCollapse: true,
  },
  // object for collapse (dropdown)
  {
    type: "collapse",
    name: "Setting",
    key: "setting",
    icon: <SettingsIcon />,
    collapse: [
      {
        name: "Contact",
        key: "contact1",
        route: "/submenu1/contact1",
        component: <Contact />,
      },
      {
        name: "About",
        key: "about1",
        route: "/submenu2/about1",
        component: <About />,
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
        key: "test",
        route: "/submenu3/test",
        component: <Contact />,
      },
      {
        name: "test",
        key: "test1",
        route: "/submenu4/test1",
        component: <About />,
      },
    ],
  },
  {
    name: "InputField",
    key: "inputfield",
    route: "/inputfield",
    icon: <Icon fontSize="small">I</Icon>,
    component: <InputField />,
    noCollapse: true,
  },
];
