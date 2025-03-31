import React, { useState, useEffect } from "react";
import jobServices from "../services/jobServices";
import proposalServices from "../services/proposalServices";
import { Link, useNavigate } from "react-router-dom";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isProposalUpdating, setIsProposalUpdating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobsAndProposals = async () => {
      try {
        const jobsResponse = await jobServices.getJobs();
        setJobs(jobsResponse.data);

        // Fetch proposals for the client
        const proposalsResponse =
          await proposalServices.getProposalsForClient();
        setProposals(proposalsResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch jobs and proposals. Please try again.");
        setLoading(false);
      }
    };

    fetchJobsAndProposals();
  }, []);

  const handleUpdateProposalStatus = async (
    id,
    freelancerId,
    status,
    jobId,
    jobTitle
  ) => {
    setIsProposalUpdating(true);
    try {
      const payload = { id, freelancerId, status };
      await proposalServices.updateProposalStatus(payload);

      if (status === "Accepted") {
        navigate(`/contract-form/${jobId}`);
      } else {
        alert(
          `The proposal for the jobId: "${jobId}", job "${jobTitle}" has been rejected. The freelancer will be notified.`
        );
      }

      setProposals((prevProposals) =>
        prevProposals.filter((proposal) => proposal._id !== id)
      );
    } catch (err) {
      console.error("Error updating proposal status:", err);
      alert("Failed to update proposal status.");
    } finally {
      setIsProposalUpdating(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Job Listings
        </h2>
        <div className="mb-6 text-center">
          <Link to="/client-dashboard/create-job">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-200">
              Create New Job
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {jobs.map((job, index) => {
            const relatedProposals = proposals.filter(
              (proposal) => proposal.jobId._id === job._id
            );

            return (
              <div
                key={job._id || index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:bg-gradient-to-r from-[#bebdbd] to-[#8e8d8d] hover:decoration-blue-500 transition duration-300 ease-out"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <p className="text-gray-500 mb-2">
                  <span className="font-medium">Budget:</span> ${job.budget}
                </p>
                <p className="text-gray-500">
                  <span className="font-medium">Deadline:</span> {job.deadline}
                </p>
                <div className="mt-4">
                  <h4 className="font-bold text-gray-800 mb-2">Proposals:</h4>
                  {relatedProposals.length > 0 ? (
                    <ul>
                      {relatedProposals.map((proposal, index) => (
                        <li
                          key={proposal._id || index}
                          className="border border-gray-300 p-3 rounded-md mb-2"
                        >
                          <p>
                            <span className="font-medium">Freelancer:</span>{" "}
                            {proposal.freelancerId.name} (
                            {proposal.freelancerId.email})
                          </p>
                          <p>
                            <span className="font-medium">
                              Proposed Budget:
                            </span>{" "}
                            ₹{proposal.proposedBudget}
                          </p>
                          <p>
                            <span className="font-medium">Status:</span>{" "}
                            {proposal.status}
                          </p>
                          <div className="mt-2 flex gap-2">
                            <button
                              onClick={() =>
                                handleUpdateProposalStatus(
                                  proposal._id,
                                  proposal.freelancerId,
                                  "Accepted",
                                  job._id,
                                  job.title
                                )
                              }
                              className="bg-green-500 text-white px-4 py-2 rounded-lg"
                              disabled={isProposalUpdating} // Disable while updating
                            >
                              Accept
                            </button>
                            <button
                              onClick={() =>
                                handleUpdateProposalStatus(
                                  proposal._id,
                                  proposal.freelancerId._id,
                                  "Rejected",
                                  job._id,
                                  job.title
                                )
                              }
                              className="bg-red-500 text-white px-4 py-2 rounded-lg"
                              disabled={isProposalUpdating} // Disable while updating
                            >
                              Reject
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No proposals for this job.</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
