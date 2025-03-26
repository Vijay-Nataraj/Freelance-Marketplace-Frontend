import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobServices from "../services/jobServices";

const CreateJob = () => {
  const navigate = useNavigate();
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    budget: "",
    deadline: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await jobServices.createJob(jobData);
      console.log("Job created successfully!", response);
      navigate("/client-dashboard");
    } catch (error) {
      console.error(
        "Failed to create job!",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create a New Job
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            placeholder="Job Title"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            placeholder="Job Description"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="number"
            name="budget"
            value={jobData.budget}
            onChange={handleChange}
            placeholder="Budget"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="date"
            name="deadline"
            value={jobData.deadline}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition duration-200"
          >
            Create Job
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
