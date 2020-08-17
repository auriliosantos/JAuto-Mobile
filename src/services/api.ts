import axios from "axios";

const api = axios.create({
  baseURL: "https://jauto-api.herokuapp.com",
});

export default api;
