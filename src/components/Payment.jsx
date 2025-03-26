import React, { useState } from "react";

const Payment = () => {
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter an amount");
    } else if (isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount");
    } else {
      var options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        // key_secret: import.meta.env.VITE_RAZORPAY_KEY_SECRET,
        amount: amount * 100,
        currency: "INR",
        name: "Freelance Marketplace",
        description: "Freelance Marketplace Payment",
        handler: function (response) {
          alert(
            "Payment successful! Payment ID: " + response.razorpay_payment_id
          );
        },
        prefill: {
          name: "Vijay",
          email: "nvijay2704@gmail.com",
          contact: "888982279",
        },
        notes: {
          address: "Freelance Marketplace office",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const pay = new window.Razorpay(options);
      pay.open();

      pay.on("payment.failed", function (response) {
        console.error(response.error);
        alert(response.error.description);
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Razorpay Payment Integration
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            min="1"
            className="w-full mb-4 border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
