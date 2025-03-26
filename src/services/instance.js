import axios from "axios";

const baseURL =
  "http://localhost:3000/api/v1"; /*"https://freelance-marketplace-backend.onrender.com/api/v1"*/

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
