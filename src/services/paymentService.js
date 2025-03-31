import instance from "./instance";

const token = localStorage.getItem("token");

if (token) {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const paymentService = {
  createOrder: async (data) =>
    await instance.post("/payments/create-order", data),
  verifyPayment: async ({
    razorpayOrderId,
    razorpayPaymentId,
    razorpaySignature,
  }) => {
    try {
      const response = await instance.post("/payment/verify", {
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      });

      return response; // Ensure response is returned
    } catch (error) {
      console.error("Error in verifying payment:", error);
      throw new Error("Failed to verify payment");
    }
  },
};

export default paymentService;
