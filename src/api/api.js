import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3500",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
