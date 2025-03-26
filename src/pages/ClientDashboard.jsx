import React, { useState, useEffect } from "react";
import JobListing from "../components/JobListing";
import { Outlet } from "react-router-dom";

const ClientDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Client Dashboard
      </h1>
      <Outlet />
      <JobListing />
    </div>
  );
};

export default ClientDashboard;
