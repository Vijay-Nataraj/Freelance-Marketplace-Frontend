import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import paymentService from "../services/paymentService";

const PaymentVerification = () => {
  const { state } = useLocation();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (state) {
      const { razorpayOrderId, razorpayPaymentId, razorpaySignature } = state;

      const verifyPayment = async () => {
        try {
          const response = await paymentService.verifyPayment({
            razorpayOrderId,
            razorpayPaymentId,
            razorpaySignature,
          });

          setSuccessMessage("Payment verification successful!");
          setErrorMessage("");

          console.log("Payment verification response:", response.data);
          navigate("/success");
        } catch (error) {
          console.error("Error verifying payment:", error);
          setSuccessMessage("");
          setErrorMessage("Failed to verify payment");
        }
      };

      verifyPayment();
    }
  }, [state, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Verify Payment
        </h2>

        {successMessage && (
          <div className="text-center text-green-600 font-medium mt-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-center text-red-600 font-medium mt-4">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentVerification;
