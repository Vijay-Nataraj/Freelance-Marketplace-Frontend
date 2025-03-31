import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import serviceServices from "../services/serviceServices";

const CreateService = () => {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    workSamples: [],
    availability: "Available",
    skills: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "workSamples" || name === "skills") {
      setServiceData({
        ...serviceData,
        [name]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setServiceData({ ...serviceData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await serviceServices.createService(serviceData);
      console.log("Service created successfully!", response);
      navigate("/freelancer-dashboard/");
    } catch (error) {
      console.error("Failed to create service!", error.response || error);
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create Service
        </h1>
        <form onSubmit={handleSubmit} className="mb-2">
          <input
            type="text"
            name="title"
            value={serviceData.title}
            onChange={handleChange}
            placeholder="Service Title"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleChange}
            placeholder="Service Description"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="number"
            name="price"
            value={serviceData.price}
            onChange={handleChange}
            placeholder="Price"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            name="category"
            value={serviceData.category}
            onChange={handleChange}
            placeholder="Category"
            required
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="text"
            name="workSamples"
            value={serviceData.workSamples.join(", ")}
            onChange={handleChange}
            placeholder="Work Samples (comma separated)"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <select
            name="availability"
            value={serviceData.availability}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </select>
          <input
            type="text"
            name="skills"
            value={serviceData.skills.join(", ")}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition duration-200"
          >
            Create Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateService;
