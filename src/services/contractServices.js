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
    try {
      const response = await instance.get("/contract/for-freelancer", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching contracts:", error.response || error);
      throw error;
    }
  },

  getContractById: async (contractId) => {
    try {
      const response = await instance.get(`/contract/${contractId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching contracts:", error.response || error);
      throw error;
    }
  },
};

export default contractServices;
