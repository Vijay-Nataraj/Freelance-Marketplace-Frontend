import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paymentService from "../services/paymentService";

const PaymentForm = ({ contractId, contract }) => {
  const [amount, setAmount] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!contractId || !contract) {
      setErrorMessage("Invalid contract.");
      return;
    }

    try {
      const response = await paymentService.createOrder({ contractId, amount });
      // console.log(response.data);

      alert("Payment successfully done!");
      navigate("/client-dashboard");

      // const { razorpayOrderId, razorpayPaymentId, razorpaySignature } =
      //   response.data;
      // navigate("/payment-verification", {
      //   state: {
      //     razorpayOrderId,
      //     razorpayPaymentId,
      //     razorpaySignature,
      //   },
      // });
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to create payment order.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Payment for Contract: {contract?.title}
        </h2>
        <form onSubmit={handlePayment} className="space-y-4">
          <input
            type="number"
            placeholder="Payment Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="block w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Pay
          </button>
        </form>

        {errorMessage && (
          <div className="text-center text-red-600 font-medium mt-4">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentForm;
