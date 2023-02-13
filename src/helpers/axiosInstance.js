import axios from "axios";

const Instance = axios.create({
  baseURL: `${
    !process.env.REACT_APP_NODE_ENV === "development"
      ? `//${window.location.hostname}`
      : `//${window.location.hostname}:5003`
  }`,
  credentials: "include",
  withCredentials: true,
});

export default Instance;
