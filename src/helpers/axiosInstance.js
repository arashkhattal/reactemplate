import axios from "axios";

const Instance = axios.create({
  baseURL: `${
    process.env.REACT_APP_NODE_ENV.includes("development")
      ? `//${window.location.hostname}:5003`
      : `//${window.location.hostname}`
  }`,
  credentials: "include",
  withCredentials: true,
});

export default Instance;
