import React, { useState } from "react";
import paymentService from "../services/paymentService";

const PaymentVerification = () => {
  const [razorpayOrderId, setRazorpayOrderId] = useState("");
  const [razorpayPaymentId, setRazorpayPaymentId] = useState("");
  const [razorpaySignature, setRazorpaySignature] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await paymentService.verifyPayment({
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      });
      setSuccessMessage("Payment verified successfully!");
      setErrorMessage(null);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to verify payment.");
      setSuccessMessage(null);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Verify Payment
        </h1>
        <form onSubmit={handleVerification} className="space-y-4">
          <input
            type="text"
            placeholder="Razorpay Order ID"
            value={razorpayOrderId}
            onChange={(e) => setRazorpayOrderId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Razorpay Payment ID"
            value={razorpayPaymentId}
            onChange={(e) => setRazorpayPaymentId(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Razorpay Signature"
            value={razorpaySignature}
            onChange={(e) => setRazorpaySignature(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition duration-200"
          >
            Verify Payment
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

export default PaymentVerification;
