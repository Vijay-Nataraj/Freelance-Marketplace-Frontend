import React, { useState, useEffect } from "react";
import instance from "../services/instance";

const FreelancerContracts = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await instance.get("/contract/for-freelancer", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setContracts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchContracts();
  }, []);

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

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
        My Contracts
      </h2>
      {contracts.length > 0 ? (
        <div className="space-y-6">
          {contracts.map((contract) => (
            <div
              key={contract._id}
              className="text-center border border-gray-200 p-6 rounded-lg shadow-md bg-white hover:bg-gradient-to-r from-[#a0a1a1] to-[#6d6d6d] transition duration-300 ease-in-out"
            >
              <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                Job: {contract.jobId.title}
              </h3>
              <p className="text-gray-800 mb-2">
                Client: {contract.clientId.name}
              </p>
              <div className="space-y-4">
                {contract.milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className="border-t border-gray-300 pt-4 text-left"
                  >
                    <p className="text-lg">
                      <strong>Description:</strong> {milestone.description}
                    </p>
                    <p className="text-lg">
                      <strong>Due Date:</strong>{" "}
                      {new Date(milestone.dueDate).toLocaleDateString()}
                    </p>
                    <p className="text-lg">
                      <strong>Status:</strong> {milestone.status}
                    </p>
                    <p className="text-lg">
                      <strong>Payment:</strong> ₹{milestone.payment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-700">
          No contracts available
        </p>
      )}
    </div>
  );
};

export default FreelancerContracts;
