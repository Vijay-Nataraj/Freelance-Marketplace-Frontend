import instance from "./instance";

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const jobServices = {
  getAllJobs: async () => {
    return await instance.get("/jobs/all");
  },
  createJob: async (data) => {
    return await instance.post("/jobs/create", data);
  },
  getJobs: async () => {
    return await instance.get("/jobs/");
  },
  getJobById: async (jobId) => {
    return await instance.get(`/jobs/${jobId}`);
  },
  updateJob: async (jobId, data) => {
    return await instance.put(`/jobs/update/${jobId}`, data);
  },
  deleteJob: async (jobId) => {
    return await instance.delete(`/jobs/${jobId}`);
  },
  searchFreelancers: async (queryString) => {
    return await instance.get(`/jobs/search/freelancers?${queryString}`);
  },
};

export default jobServices;
