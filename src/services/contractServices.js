import instance from "./instance";

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const contractServices = {
  createContract: async (contractData) => {
    return await instance.post("/contract/create", contractData);
  },

  getContractsForFreelancer: async () => {
    return await instance.get("/contract/for-freelancer");
  },

  // You can add other methods like getting contracts for the client
};

export default contractServices;
