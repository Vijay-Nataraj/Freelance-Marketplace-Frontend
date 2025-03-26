import React, { useState } from "react";
import paymentService from "../services/paymentService";

const PaymentForm = ({ contractId }) => {
  const [amount, setAmount] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handlePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await paymentService.createOrder({ contractId, amount });
      setSuccessMessage("Payment order created! Proceed with Razorpay.");
      setErrorMessage(null);
      console.log(response.data);
      // Add Razorpay checkout integration here
    } catch (error) {
      console.error(error);
      setSuccessMessage(null);
      setErrorMessage("Failed to create payment order.");
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Payment Form
        </h1>
        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="number"
            placeholder="Payment Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition duration-200"
          >
            Pay
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

export default PaymentForm;
