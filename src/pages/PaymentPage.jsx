import React from "react";
import PaymentForm from "../components/PaymentForm";
import PaymentVerification from "../components/PaymentVerification";

const PaymentPage = () => {
  const contractId = "67e3f89da36a6bedcd4b9150";
  return (
    <div>
      <h1>Manage Payments</h1>
      <PaymentForm contractId={contractId} />
      <PaymentVerification />
    </div>
  );
};

export default PaymentPage;
