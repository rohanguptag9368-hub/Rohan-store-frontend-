import axios from "axios";

const api = axios.create({
  baseURL: "https://rohan-backend-55cz.onrender.com/api",
});

export default api;