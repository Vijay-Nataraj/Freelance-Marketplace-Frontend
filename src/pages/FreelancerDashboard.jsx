import React, { useState, useEffect } from "react";
import LatestJobs from "../components/LatestJobs";
import { Outlet } from "react-router-dom";
import FreelancerContracts from "../components/FreelancerContracts";

const FreelancerDashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to Freelancer Dashboard
      </h1>

      <Outlet />
      <LatestJobs />
      <FreelancerContracts />
    </div>
  );
};

export default FreelancerDashboard;
