import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await authServices.getUserDetails();
        setUser(response.data);
      } catch (error) {
        setErrorMessage("Failed to fetch user details");
        console.error(error);
      }
    };

    fetchUserDetails();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const response = await authServices.updateUserDetails(user);
      setSuccessMessage("Profile updated successfully");
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage("Failed to update profile");
      setSuccessMessage(null);
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Profile
        </h2>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 rounded-lg p-4 mb-4 text-center">
            <p>{errorMessage}</p>
          </div>
        )}
        {successMessage && (
          <div className="bg-green-100 text-green-600 rounded-lg p-4 mb-4 text-center">
            <p>{successMessage}</p>
          </div>
        )}

        <form onSubmit={handleUpdateProfile} className="space-y-6">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-gray-700 mb-1 font-medium"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-gray-700 mb-1 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              disabled
              required
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <div className="form-group">
            <label
              htmlFor="role"
              className="block text-gray-700 mb-1 font-medium"
            >
              Role
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={user.role}
              onChange={handleInputChange}
              disabled
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
