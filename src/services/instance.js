import axios from "axios";

const baseURL = "https://freelance-marketplace-backend.onrender.com/api/v1";

const instance = axios.create({
  baseURL,
});

export default instance;
