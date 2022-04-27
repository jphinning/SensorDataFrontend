import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000/"
    : "https://sensor-info.herokuapp.com/";

export default axios.create({
  baseURL: `${apiURL}`,
  headers: {
    "Content-type": "application/json",
  },
});
