import React, { useEffect, useState } from "react";
import jobServices from "../services/jobServices";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const LatestJobs = () => {
  const { user, logout } = useAuth();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobServices.getAllJobs();
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // const sendProposal = async (jobId) => {
  //   const proposalData = {
  //     jobId,
  //     freelancerId: "freelancerId", // Replace with actual freelancer ID
  //     description: "I am interested in this job and would love to work on it.",
  //     budget: "500", // Replace with freelancer's proposed budget
  //   };

  //   try {
  //     await jobServices.createProposal(proposalData); // Call API to create a proposal
  //     alert("Proposal sent successfully!");
  //   } catch (err) {
  //     alert("Error sending proposal: " + err.message);
  //   }
  // };

  if (loading) {
    return <div className="text-center text-xl text-gray-700">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-600 font-medium">
        Error: {error}
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "text-green-900";
      case "in progress":
        return "text-yellow-900";
      case "completed":
        return "text-blue-900";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Latest Jobs
      </h2>
      <div className="space-y-6">
        {jobs.map((job, index) => (
          // console.log(job),
          <div
            key={job.id || index}
            className="text-center border border-gray-200 p-6 rounded-lg shadow-md bg-white hover:bg-gradient-to-r from-[#a0a1a1] to-[#6d6d6d] hover:decoration-blue-500 transition duration-300 ease-in-out"
          >
            <h3 className="text-3xl font-semibold text-gray-900 mb-2">
              {job.title}
            </h3>
            <p className="text-gray-800 mb-2">{job.description}</p>

            {user ? (
              <div className="text-center">
                <div className="flex items-center justify-evenly mb-2">
                  <span className="text-lg font-medium text-red-600">
                    ₹ {`${job.budget}`}
                  </span>
                  <span
                    className={`text-lg font-medium px-3 py-1 ${getStatusColor(
                      job.status
                    )}`}
                  >
                    Status : {`${job.status}`}
                  </span>
                  <span className="text-lg font-medium">
                    Deadline: {`${formatDate(job.deadline)}`}
                  </span>
                </div>
                <Link
                  to="/freelancer-dashboard/send-proposal"
                  state={{ jobId: job._id, clientId: job.clientID._id }}
                >
                  <button className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4 hover:bg-blue-600">
                    Send Proposal
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-center mb-2">
                <span className="text-lg font-medium text-red-600">
                  ₹ {`${job.budget}`}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
