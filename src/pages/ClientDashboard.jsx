import React, { useState, useEffect } from "react";
import instance from "../services/instance";

const ClientDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await instance.get("/jobs/all");
  //       const result = await response.json();
  //       setData(result);
  //     } catch (error) {
  //       console.error("Error fetching dashboard data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      <h1>Welcome to Client Dashboard</h1>
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
};

export default ClientDashboard;
