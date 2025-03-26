import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import contractServices from "../services/contractServices";
import jobServices from "../services/jobServices";
import proposalServices from "../services/proposalServices"; // Correct service for proposals

const ContractForm = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [job, setJob] = useState({});
  const [freelancerId, setFreelancerId] = useState(null); // Store freelancerId
  const [milestones, setMilestones] = useState([
    { description: "", dueDate: "", payment: "" },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        // Fetch job details
        const jobResponse = await jobServices.getJobById(jobId);
        setJob(jobResponse.data);

        // Fetch proposals related to the job
        const proposalsResponse = await proposalServices.getProposalsForJob(
          jobId
        );

        // Assuming proposal.status is where we check for the accepted proposal
        const acceptedProposal = proposalsResponse.find(
          (proposal) => proposal.status === "Accepted"
        );

        if (acceptedProposal) {
          setFreelancerId(acceptedProposal.freelancerId._id); // Assuming freelancerId is in freelancerId._id
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching job details:", err);
        setError("Failed to fetch job details.");
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  const handleAddMilestone = () => {
    setMilestones([
      ...milestones,
      { description: "", dueDate: "", payment: "" },
    ]);
  };

  const handleMilestoneChange = (index, field, value) => {
    const updatedMilestones = [...milestones];
    updatedMilestones[index][field] = value;
    setMilestones(updatedMilestones);
  };

  const handleSubmitContract = async (e) => {
    e.preventDefault();

    if (!freelancerId) {
      alert("No freelancer assigned to this job. Cannot create contract.");
      return;
    }

    const contractData = {
      jobId,
      freelancerId, // Use the freelancerId from accepted proposal
      milestones,
    };

    try {
      await contractServices.createContract(contractData);
      alert("Contract created successfully!");
      navigate("/client-dashboard");
    } catch (err) {
      console.error("Error creating contract:", err);
      setError("Failed to create contract.");
    }
  };

  if (loading) {
    return <div>Loading job details...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Contract for {job.title}
        </h2>

        <form onSubmit={handleSubmitContract} className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Add Milestones
          </h3>
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
            >
              <div className="mb-4">
                <label className="block text-gray-700">Description</label>
                <input
                  type="text"
                  value={milestone.description}
                  onChange={(e) =>
                    handleMilestoneChange(index, "description", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter milestone description"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Due Date</label>
                <input
                  type="date"
                  value={milestone.dueDate}
                  onChange={(e) =>
                    handleMilestoneChange(index, "dueDate", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg p-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Payment</label>
                <input
                  type="number"
                  value={milestone.payment}
                  onChange={(e) =>
                    handleMilestoneChange(index, "payment", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Enter milestone payment"
                  required
                />
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={handleAddMilestone}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Milestone
          </button>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-200"
            >
              Create Contract
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContractForm;
