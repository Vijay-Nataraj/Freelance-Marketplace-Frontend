import React, { useState, useEffect } from "react";
import axios from "axios";

const FreelancerContracts = () => {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/contract/for-freelancer",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setContracts(response.data);
      } catch (error) {
        console.error("Error fetching contracts", error);
      }
    };
    fetchContracts();
  }, []);

  return (
    <div>
      <h1>My Contracts</h1>
      {contracts.length > 0 ? (
        <ul>
          {contracts.map((contract) => (
            <li key={contract._id}>
              <h2>Job: {contract.jobId.title}</h2>
              <p>Client: {contract.clientId.name}</p>
              <ul>
                {contract.milestones.map((milestone, index) => (
                  <li key={index}>
                    <p>Description: {milestone.description}</p>
                    <p>
                      Due Date:{" "}
                      {new Date(milestone.dueDate).toLocaleDateString()}
                    </p>
                    <p>Status: {milestone.status}</p>
                    <p>Payment: ₹{milestone.payment}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>No contracts available</p>
      )}
    </div>
  );
};

export default FreelancerContracts;
