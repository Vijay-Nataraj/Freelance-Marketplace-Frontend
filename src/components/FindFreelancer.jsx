import React, { useState } from "react";
import jobServices from "../services/jobServices";

const FindFreelancer = () => {
  const [searchParams, setSearchParams] = useState({
    skill: "",
    rating: "",
    minBudget: "",
    maxBudget: "",
  });

  const [freelancers, setFreelancers] = useState([]);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({ ...searchParams, [name]: value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const params = new URLSearchParams();

      if (searchParams.skill) {
        params.append("skill", searchParams.skill);
      }
      if (searchParams.rating) {
        params.append("rating", searchParams.rating);
      }
      if (searchParams.minBudget) {
        params.append("minBudget", searchParams.minBudget);
      }
      if (searchParams.maxBudget) {
        params.append("maxBudget", searchParams.maxBudget);
      }

      console.log(searchParams);
      const response = await jobServices.searchFreelancers(params.toString());
      //   console.log(response.data);
      setFreelancers(response.data);
      setError(null);
    } catch (err) {
      console.log(err);
      setError(err.response ? err.response.data : err.message);
      setFreelancers([]);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toISOString().split("T")[0];
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "open":
        return "text-green-900";
      case "in progress":
        return "text-yellow-900";
      case "completed":
        return "text-blue-900";
      default:
        return "text-gray-900";
    }
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center p-8">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Find Freelancers
        </h1>
        <form onSubmit={handleSearch} className="space-y-4">
          <input
            type="text"
            name="skill"
            value={searchParams.skill}
            onChange={handleChange}
            placeholder="Skills (e.g., JavaScript, Python)"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="number"
            name="rating"
            value={searchParams.rating}
            onChange={handleChange}
            placeholder="Minimum Rating"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="number"
            name="minBudget"
            value={searchParams.minBudget}
            onChange={handleChange}
            placeholder="Min Budget"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <input
            type="number"
            name="maxBudget"
            value={searchParams.maxBudget}
            onChange={handleChange}
            placeholder="Max Budget"
            className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring focus:ring-blue-300 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg p-3 font-medium hover:bg-blue-600 transition duration-200"
          >
            Search Freelancers
          </button>
        </form>

        {error && (
          <div className="text-red-500 mt-4">
            <p>Error: {error}</p>
          </div>
        )}

        <div className="mt-8">
          {freelancers.length > 0 ? (
            <ul className="space-y-4">
              {freelancers.map(
                (freelancer) => (
                  console.log(freelancer),
                  (
                    <li
                      key={freelancer._id || index}
                      className="border border-gray-300 p-4 rounded-lg"
                    >
                      <h2 className="text-xl font-bold text-gray-800">
                        {freelancer.name}
                      </h2>
                      <p>Skills: {freelancer.skills.join(", ")}</p>
                      <p>Rating: {freelancer.rating}</p>
                      <p>Budget: ${freelancer.budget}</p>
                    </li>
                  )
                )
              )}
            </ul>
          ) : (
            <p className="text-gray-600">No freelancers found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindFreelancer;
