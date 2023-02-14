
import { lazy } from "react";

// Material Dashboard 2 PRO React layouts

const HomePage = lazy(() => import("./src/pages/home/HomePage"));
const Contact = lazy(() => import("./src/pages/home/Contact"));
const About = lazy(() => import("./src/pages/home/About"));

// @mui icons
const Icon = lazy(() => import("@mui/material/Icon"));

export const adminRoutes = [
  {
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Icon fontSize="medium">manage_accounts</Icon>,
    component: <HomePage />,
    noCollapse: true,
  },
  {
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <Icon fontSize="medium">manage_accounts</Icon>,
    component: <Contact />,
    noCollapse: true,
  },
  {
    name: "About",
    key: "about",
    route: "/about",
    icon: <Icon fontSize="medium">manage_accounts</Icon>,
    component: <About />,
    noCollapse: true,
  },
];