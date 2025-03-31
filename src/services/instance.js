import axios from "axios";

const baseURL = "https://freelance-marketplace-backend.onrender.com/api/v1";
/*"http://localhost:3000/api/v1";*/

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default instance;
