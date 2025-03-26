import React, { useState } from "react";
import proposalServices from "../services/proposalServices";
import { useLocation, useNavigate } from "react-router-dom";

const SendProposal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { jobId, clientId } = location.state || {};
  // console.log(jobId, clientId);

  if (!jobId || !clientId) {
    return (
      <div className="text-center p-6">
        <p className="text-red-500">
          Error: Missing job or client information.
        </p>
      </div>
    );
  }
  const [proposalData, setProposalData] = useState({
    description: "",
    proposedBudget: "",
  });

  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProposalData({ ...proposalData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const proposalPayload = {
        ...proposalData,
        jobId,
        clientId,
      };
      // console.log("Sending Proposal:", proposalPayload);

      const response = await proposalServices.sendProposal(proposalPayload);
      // console.log(response);
      setSuccessMessage(response.data.messageponse);
      setErrorMessage(null);
      alert(response.data.message);
      navigate("/freelancer-dashboard");
    } catch (error) {
      console.log(error);
      setSuccessMessage(null);
      setErrorMessage(
        error.response ? error.response.data.message : "Failed to send proposal"
      );
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Send Proposal
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            name="description"
            value={proposalData.description}
            onChange={handleChange}
            placeholder="Proposal Description"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          ></textarea>
          <input
            type="number"
            name="proposedBudget"
            value={proposalData.proposedBudget}
            onChange={handleChange}
            placeholder="Proposed Budget"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition duration-200"
          >
            Submit Proposal
          </button>
        </form>

        {successMessage && (
          <div className="text-green-600 text-center mt-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 text-center mt-4">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};

export default SendProposal;
