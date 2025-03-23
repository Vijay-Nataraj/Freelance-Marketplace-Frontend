import instance from "./instance";

const authServices = {
  register: async (data) => {
    const response = await instance.post("/user/register", data);
    console.log(response.data);
    return response.data;
  },
  login: async (email, password) => {
    try {
      const response = await instance.post("/user/login", { email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Network error" };
    }
  },
  forgotPassword: async (email) => {
    try {
      const response = await instance.post("/user/forgot-password", { email });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Network error" };
    }
  },
  resetPassword: async (token, password) => {
    try {
      const response = await instance.put(`/user/reset-password/${token}`, {
        password,
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: "Network error" };
    }
  },
};

export default authServices;
