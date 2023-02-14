//imported lazy from react
import { lazy } from "react";

// Import components using lazy to load the component
const HomePage = lazy(() => import("./pages/home/HomePage"));
const Contact = lazy(() => import("./pages/home/Contact"));
const About = lazy(() => import("./pages/home/About"));

// @mui icons
const Icon = lazy(() => import("@mui/material/Icon"));

// This is routes available in side bar
export const adminRoutes = [
  {
    name: "Dashboard",
    key: "dashboard",
    route: "/dashboard",
    icon: <Icon fontSize="small">D</Icon>,
    component: <HomePage />,
    noCollapse: true,
  },
  {
    name: "Contact",
    key: "contact",
    route: "/contact",
    icon: <Icon fontSize="small">C</Icon>,
    component: <Contact />,
    noCollapse: true,
  },
  {
    name: "About",
    key: "about",
    route: "/about",
    icon: <Icon fontSize="small">A</Icon>,
    component: <About />,
    noCollapse: true,
  },
];
