import instance from "./instance";

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const serviceServices = {
  getServices: async () => {
    return await instance.get("/services/");
  },
  createService: async (data) => {
    return await instance.post("/services/create", data);
  },
  getServiceById: async (serviceID, token) => {
    return await instance.get(`/services/${serviceID}`);
  },
  updateService: async (serviceId, data) => {
    return await instance.put(`/services/update/${serviceId}`, data);
  },
  deleteService: async (serviceId) => {
    return await instance.delete(`/services/${serviceId}`);
  },
  searchJobs: async () => {
    return await instance.get(`/services/search/job`);
  },
};

export default serviceServices;
