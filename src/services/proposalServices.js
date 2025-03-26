import instance from "./instance";

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const proposalServices = {
  sendProposal: async (proposalData) => {
    return await instance.post("/proposal/send", proposalData);
  },
  getProposalsForClient: async () => {
    return await instance.get("/proposal/for-client");
  },
  updateProposalStatus: async ({ id, status }) => {
    return await instance.put(
      `/proposal/update/${id}`,
      { status },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
  getProposalsForJob: async (jobId) => {
    try {
      const response = await instance.get(`/proposal/job/${jobId}`);
      return response.data;
    } catch (err) {
      console.error("Error fetching proposals:", err);
      throw new Error("Unable to fetch proposals");
    }
  },
};

export default proposalServices;
