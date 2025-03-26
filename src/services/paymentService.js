import instance from "./instance";

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const jobServices = {
  createOrder: async (data) =>
    await instance.post("/payments/create-order", data),
  verifyPayment: async (data) =>
    await instance.post("/payments/verify-payment", data),
};

export default jobServices;
