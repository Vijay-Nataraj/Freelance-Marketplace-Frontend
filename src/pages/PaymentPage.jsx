import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PaymentForm from "../components/PaymentForm";
import contractServices from "../services/contractServices";

const PaymentPage = () => {
  const { contractId } = useParams();

  const [contract, setContract] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContract = async () => {
      try {
        const response = await contractServices.getContractById(contractId);
        setContract(response);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch contract details");
        setLoading(false);
        console.error(err);
      }
    };

    if (contractId) {
      fetchContract();
    }
  }, [contractId]);

  if (loading) {
    return <div className="text-center text-xl text-gray-700">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-600 font-medium">
        {error}
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Manage Payment
      </h1>

      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:bg-gradient-to-r from-[#a0a1a1] to-[#6d6d6d] transition duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
          Contract Details
        </h2>
        <p className="text-lg mb-2">
          <strong>Job Title:</strong> {contract.jobId.title}
        </p>
        <p className="text-lg mb-2">
          <strong>Client:</strong> {contract.clientId.name}
        </p>
        <p className="text-lg mb-4">
          <strong>FreelancerId:</strong> {contract.freelancerId}
        </p>

        <PaymentForm contractId={contractId} contract={contract} />
      </div>
    </div>
  );
};

export default PaymentPage;
